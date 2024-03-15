import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  DocumentReference,
} from "firebase/firestore";
import {
  RADIATOR_TEMPERATURE_MAX,
  RADIATOR_TEMPERATURE_MIN,
} from "~/constants/mock/radiators";
import {
  FirestoreDocumentNotFoundError,
  InvalidInputError,
} from "~/errors/client";

export interface Radiator {
  name: string;
  status: boolean;
  temperature: number;
}

interface RadiatorHourData {
  status: boolean;
  temperature: number;
}

interface RadiatorHistory {
  name: string;
  hours: Record<string, RadiatorHourData>;
}

type RadiatorsHistory = Record<string, RadiatorHistory>;

const useFirestoreRadiators = () => {
  const { $db } = useNuxtApp();

  const getRadiators = async () => {
    const radiatorsRef = collection($db, "radiators");
    const radiatorsSnap = await getDocs(radiatorsRef);

    if (radiatorsSnap.empty) {
      throw new FirestoreDocumentNotFoundError("Radiators don't exist");
    }

    const radiators: Record<string, Radiator> = {};
    radiatorsSnap.forEach((doc) => {
      const radiatorId = doc.id;
      radiators[radiatorId] = doc.data() as Radiator;
    });
    return radiators;
  };

  const getRadiatorNameById = async (radiatorId: string) => {
    const radiators = await getRadiators();

    const isRadiator = radiatorId in radiators;
    if (!isRadiator) {
      throw new Error(`Radiator with id ${radiatorId} does not exist`);
    }

    const name = radiators[radiatorId].name;
    return name;
  };

  const getHistoryByDate = async (date: string) => {
    const dateRef = doc($db, "history", date);
    const dateSnap = await getDoc(dateRef);

    if (!dateSnap.exists()) {
      throw new FirestoreDocumentNotFoundError(
        `History does not exist for date: ${date}`
      );
    }

    const radiatorsHistory: RadiatorsHistory = {};
    const firestoreRadiatorsHistory = dateSnap.data();

    for (let [radiatorId, radiatorData] of Object.entries(
      firestoreRadiatorsHistory
    )) {
      const radiatorName = await getRadiatorNameById(radiatorId);
      radiatorsHistory[radiatorId] = {
        name: radiatorName,
        ...radiatorData,
      };
    }

    return radiatorsHistory;
  };

  const getRadiatorRefById = (radiatorId: string) => {
    const radiatorsRef = collection($db, "radiators");
    const radiatorRef = doc(radiatorsRef, radiatorId);
    return radiatorRef;
  };

  const getRadiatorSnap = async (
    radiatorId: string,
    radiatorRef: DocumentReference
  ) => {
    const radiatorSnap = await getDoc(radiatorRef);
    if (!radiatorSnap.exists()) {
      throw new FirestoreDocumentNotFoundError(
        `Radiator with id: ${radiatorId} does not exist`
      );
    }
    return radiatorSnap;
  };

  const increaseTemperatureByOne = async (radiatorId: string) => {
    const radiatorRef = getRadiatorRefById(radiatorId);
    const radiatorSnap = await getRadiatorSnap(radiatorId, radiatorRef);

    const temperature = Number(radiatorSnap.data().temperature);
    const newTemperature = temperature + 1;
    if (newTemperature > RADIATOR_TEMPERATURE_MAX) {
      throw new InvalidInputError(
        `Maximal radiator temperature is ${RADIATOR_TEMPERATURE_MAX}`
      );
    }

    await updateDoc(radiatorRef, {
      temperature: newTemperature,
    });
  };

  const decreaseTemperatureByOne = async (radiatorId: string) => {
    const radiatorRef = getRadiatorRefById(radiatorId);
    const radiatorSnap = await getRadiatorSnap(radiatorId, radiatorRef);

    const temperature = Number(radiatorSnap.data().temperature);
    const newTemperature = temperature - 1;
    if (newTemperature < RADIATOR_TEMPERATURE_MIN) {
      throw new InvalidInputError(
        `Minimal radiator temperature is ${RADIATOR_TEMPERATURE_MIN}`
      );
    }

    await updateDoc(radiatorRef, {
      temperature: newTemperature,
    });
  };

  const toggleStatus = async (radiatorId: string) => {
    const radiatorRef = getRadiatorRefById(radiatorId);
    const radiatorSnap = getRadiatorSnap(radiatorId, radiatorRef);

    const status = Boolean((await radiatorSnap).data().status);
    const newStatus = !status;
    await updateDoc(radiatorRef, {
      status: newStatus,
    });
  };

  const updateName = async (radiatorId: string, name: string) => {
    const radiatorRef = getRadiatorRefById(radiatorId);
    const radiatorSnap = getRadiatorSnap(radiatorId, radiatorRef);

    await updateDoc(radiatorRef, {
      name,
    });
  };

  return {
    getRadiators,
    getHistoryByDate,
    increaseTemperatureByOne,
    decreaseTemperatureByOne,
    toggleStatus,
    updateName,
  };
};

export default useFirestoreRadiators;
