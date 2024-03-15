import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const nuxtRuntimeConfig = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_API_KEY,
    authDomain: nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_AUTH_DOMAIN,
    projectId: nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_PROJECT_ID,
    storageBucket:
      nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_MESSAGING_SENDER_ID,
    appId: nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_APP_ID,
    measurementId:
      nuxtRuntimeConfig.public.firebaseConfig.FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return {
    provide: {
      auth,
      db,
    },
  };
});
