import React, { useContext, useEffect, Fragment } from "react";
import NavBar from "../../features/NavBar";
import { ContainerInApp } from "../layout/styles.styled";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";

const App: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Загружаю активности..." />;

  return (
    <Fragment>
      <NavBar />
      <ContainerInApp>
        <ActivityDashboard />
      </ContainerInApp>
    </Fragment>
  );
};

export default observer(App);
