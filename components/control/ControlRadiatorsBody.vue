<script setup lang="ts">
import {
  PencilIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
} from "@heroicons/vue/24/solid";

import type { Radiator } from "~/composables/useFirestoreRadiators";

interface Props {
  radiators: Record<string, Radiator> | null;
}
defineProps<Props>();

const {
  increaseTemperatureByOne,
  decreaseTemperatureByOne,
  toggleStatus,
  updateName,
} = useFirestoreRadiators();

const handleIncreaseTemperatureByOneBtn = async (radiatorId: string) => {
  await increaseTemperatureByOne(radiatorId);
  await refreshNuxtData();
};

const handleDecreaseTemperatureByOneBtn = async (radiatorId: string) => {
  await decreaseTemperatureByOne(radiatorId);
  await refreshNuxtData();
};

const handleToggleStatus = async (radiatorId: string) => {
  await toggleStatus(radiatorId);
  await refreshNuxtData();
};

const editName = useState<string>("editName", () => "");
const editNameRadiatorId = useState<string>("editNameRadiatorId", () => "");

const handleUpdateName = async () => {
  if (editName.value === "" || editName.value.trim() === "") {
    return;
  }

  await updateName(editNameRadiatorId.value, editName.value);

  editName.value = "";
  editNameRadiatorId.value = "";
  await refreshNuxtData();
};
</script>

<template>
  <tbody class="table-body">
    <tr
      v-for="({ name, temperature, status }, index) of radiators"
      :key="index"
      class="table-row"
    >
      <th scope="row" class="name">
        <p v-if="editNameRadiatorId !== index">{{ name }}</p>
        <input v-else v-model="editName" placeholder="Enter new name" />
        <button
          @click="
            () => {
              editNameRadiatorId
                ? handleUpdateName()
                : (editNameRadiatorId = index);
            }
          "
          type="button"
          class="edit-btn"
        >
          <PencilIcon v-if="editNameRadiatorId !== index" class="edit-icon" />
          <CheckIcon v-else class="ok-icon" />
        </button>
      </th>
      <td class="temperature">
        <div class="inner-container">
          <button
            @click="() => handleDecreaseTemperatureByOneBtn(index)"
            class="edit-btn"
          >
            <MinusIcon class="edit-icon" />
          </button>
          <p class="data">
            {{ temperature }}
          </p>
          <button
            @click="() => handleIncreaseTemperatureByOneBtn(index)"
            class="edit-btn"
          >
            <PlusIcon class="edit-icon" />
          </button>
        </div>
      </td>
      <td class="status">
        <button @click="() => handleToggleStatus(index)">
          <UiBadge v-if="status" text="on" type="success" />
          <UiBadge v-else text="off" type="error" />
        </button>
      </td>
    </tr>
  </tbody>
</template>

<style scoped lang="scss">
.table-row {
  &:nth-child(2n + 1) {
    background-color: getColor("nt-10");
  }

  .name {
    display: flex;
    gap: getInd(200);
    padding-left: getInd(400);
    text-transform: capitalize;

    .edit-btn {
      flex-shrink: 0;

      .edit-icon {
        $iconSize: 15px;

        width: $iconSize;
        height: $iconSize;
      }

      .ok-icon {
        $iconSize: 20px;

        width: $iconSize;
        height: $iconSize;
      }
    }
  }

  .temperature {
    text-align: center;

    .inner-container {
      display: flex;
      justify-content: center;

      .data {
        $fontWeight: 500;

        padding: 0 getInd(400);
        font-weight: $fontWeight;
      }

      .edit-btn {
        @include primaryButton;
        width: max-content;

        .edit-icon {
          $iconSize: 10px;

          width: $iconSize;
          height: $iconSize;
        }
      }
    }
  }

  .status {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
}
</style>
