export default defineNuxtRouteMiddleware((to, from) => {
  // Skip on server
  if (process.server) {
    return;
  }

  const { user } = useFirebaseAuth();

  const isNavigateToAuthPages =
    to.path === "/auth/signup" || to.path === "/auth/login";

  // Set user if there is no current user and there is user in local storage
  const { checkIsUserInLocalStorage, setUserFromLocalStorage } =
    useFirebaseAuth();

  if (!user.value) {
    const isUserInLocalStorage = checkIsUserInLocalStorage();
    if (isUserInLocalStorage) {
      setUserFromLocalStorage();

      if (isNavigateToAuthPages) {
        return navigateTo("/");
      } else {
        return navigateTo(to);
      }
    }
  }

  // Redirect to home page if user is authenticated and
  // tries to navigate to auth login or signup pages
  if (user.value && isNavigateToAuthPages) {
    return navigateTo("/");
  }

  const isResetPasswordPage = to.path === "/auth/resetPassword";
  // Redirect user to signup page if user is not authenticated and
  // tries to access non-auth routes
  if (!user.value && !isNavigateToAuthPages && !isResetPasswordPage) {
    return navigateTo("/auth/signup");
  }
});
