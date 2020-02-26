import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { MenuTop } from "../app/layout/styles.styled";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <MenuTop fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Реактивности
        </Menu.Item>
        <Menu.Item name="Активности" as={NavLink} to="/activities" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Создать активность"
          />
        </Menu.Item>
      </Container>
    </MenuTop>
  );
};
export default observer(NavBar);
