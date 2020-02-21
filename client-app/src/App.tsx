import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
interface IServerData{
  id: number
  name: string
}

const App: React.FC = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/values").then(r => setState(r.data));
  }, []);
  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>
          Account Settings
        </Header.Content>
      </Header>
      <List>
        {state.map(({id, name}: IServerData) => (
          <List.Item key={id}>{name}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
