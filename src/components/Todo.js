import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Check, Delete } from "@material-ui/icons";

const Todo = (props) => {
  const markIsComplted = () => {
    props.checkTodo(props.id);
  };

  const markStyle = props.Checked
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 30, background: "lightgray" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" style={markStyle}>
            <IconButton onClick={markIsComplted}>
              <Check style={{ color: "green" }}></Check>
            </IconButton>
            Title:{props.title}
            <br />
            <p style={{ marginLeft: 10 }}>Description: {props.description}</p>
            <IconButton style={{ float: "right" }} onClick={deleteTodo}>
              <Delete style={{ color: "red" }}></Delete>
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;
