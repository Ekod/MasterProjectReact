import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { MenuTop } from "../app/layout/styles.styled";

interface IProps {
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
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
export default NavBar;
