import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["heelo", "hoola", "Whats up"]);

  const sendMessage = (event) => {
    // all the logic to send msg goes
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hiiii....</h1>
      <form>
        <FormControl>
          <InputLabel>Enter your Messege</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;
