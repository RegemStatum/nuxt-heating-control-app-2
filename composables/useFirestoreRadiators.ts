import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { FirestoreDocumentNotFoundError } from "~/errors/client";

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

  return {
    getRadiators,
    getHistoryByDate,
  };
};

export default useFirestoreRadiators;
