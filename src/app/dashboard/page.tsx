"use client";
import { memo } from "react";
import { useAppSelector } from "@/lib/hooks/reduxHooks";

import { lazy, Suspense, useMemo } from "react";

const Dashboard = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );
  console.log(isAuthenticated);
  const role = useAppSelector((state) => state.authSlice.userRole);

  const UserDashboard = lazy(() => import("./Userdashboard"));
  const AdminDashboard = lazy(() => import("./AdminDashboard"));

  const DashboardComponent = useMemo(() => {
    return role === "admin" ? AdminDashboard : AdminDashboard;
  }, [role]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardComponent />
    </Suspense>
  );
};
export default memo(Dashboard);
