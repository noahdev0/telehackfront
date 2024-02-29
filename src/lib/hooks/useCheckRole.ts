import { useRouter } from "next/navigation";
import { useAppSelector } from "./reduxHooks";

export const useCheckRole = () => {
  const { isAuthenticated, userRole } = useAppSelector(
    (state) => state.authSlice
  );
  const router = useRouter();
  if (!isAuthenticated) {
    router.push("/login");
  }
  if (userRole === "admin") {
    router.push("/admin");
  }
  if (userRole === "user") {
    router.push("/user");
  }
};
