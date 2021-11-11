import React from "react";
import { useState } from "react";
import { Container, FormControl, Button, TextField } from "@material-ui/core";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSumbitButton = (e) => {
    e.preventDefault();
    //     console.log(title);
    props.addTodo(title, description);
  };
  return (
    <Container maxWidth="sm">
      <form id="todo-form" onSubmit={handleSumbitButton}>
        <FormControl fullWidth={true}>
          {/* The Title Text TextField */}
          <TextField
            id="outlined-basic"
            label="Todo Title"
            variant="outlined"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: 5 }}
          />
          {/* The Description Field */}
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* The Submit Button */}
          <Button color="primary" variant="contained" type="submit">
            Add Todo
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};
export default TodoForm;
