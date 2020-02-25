import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { MenuTop } from "../app/layout/styles.styled";
import ActivityStore from "../app/stores/activityStore";
import { observer } from "mobx-react-lite";

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const { openCreateForm } = activityStore;

  return (
    <MenuTop fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Реактивности
        </Menu.Item>
        <Menu.Item name="Активность" />
        <Menu.Item>
          <Button
            onClick={openCreateForm}
            positive
            content="Создать активность"
          />
        </Menu.Item>
      </Container>
    </MenuTop>
  );
};
export default observer(NavBar);
