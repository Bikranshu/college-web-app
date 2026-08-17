import { Suspense, memo } from "react";

import RouterRoutes from "../routes";

const Loading = () => <div>Loading...</div>;

const MainLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes />
    </Suspense>
  );
};

export default memo(MainLayout);
