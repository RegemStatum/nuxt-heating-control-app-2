import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from "firebase/auth";
import LocalStorageItems from "@/constants/localStorage";

const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("user", () => null);

  const checkIsUserInLocalStorage = () => {
    const localStorageUser = localStorage.getItem(LocalStorageItems.User);
    return !!localStorageUser;
  };

  const setUserFromLocalStorage = () => {
    const localStorageUser = localStorage.getItem(LocalStorageItems.User);
    if (localStorageUser) {
      const userData = JSON.parse(localStorageUser);
      user.value = userData;
    }
  };

  const setUser = (userCredentials: UserCredential) => {
    const userData = userCredentials.user;
    user.value = userData;
    localStorage.setItem(LocalStorageItems.User, JSON.stringify(userData));
  };

  const registerUser = async (email: string, password: string) => {
    const userCredentials = await createUserWithEmailAndPassword(
      $auth,
      email,
      password
    );
    if (userCredentials) {
      setUser(userCredentials);
    }
  };

  const loginUser = async (email: string, password: string) => {
    const userCredentials = await signInWithEmailAndPassword(
      $auth,
      email,
      password
    );
    if (userCredentials) {
      setUser(userCredentials);
    }
  };

  const logoutUser = async () => {
    await signOut($auth);
    user.value = null;
    localStorage.setItem(LocalStorageItems.User, "");
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail($auth, email);
  };

  return {
    user,
    registerUser,
    loginUser,
    logoutUser,
    setUserFromLocalStorage,
    checkIsUserInLocalStorage,
    resetPassword,
  };
};

export default useFirebaseAuth;
