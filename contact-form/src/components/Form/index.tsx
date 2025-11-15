import { useState } from "react";
import GenericInputField from "../GenericInputField";
import GenericTextArea from "../GenericTextArea";
import Button from "../Button";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    console.log({ name, email, message });
  };

  return (
    <>
      <h1>Contact form</h1>
      {/* Input for name */}
      <GenericInputField
        id="name"
        type="text"
        label="Name"
        required={true}
        placeholder="Enter full name"
        value={name}
        onChange={setName}
      />
      {/* Input for email */}
      <GenericInputField
        id="email"
        type="email"
        label="Email"
        placeholder="Enter full name"
        required={true}
        value={email}
        onChange={setEmail}
      />
      {/* Input for message */}
      <GenericTextArea
        id="message"
        label="Message"
        value={message}
        required={true}
        onChange={setMessage}
        placeholder="Enter your Message here"
      />
      {/* button */}
      <Button
        id="submit"
        type="submit"
        variant="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
};

export default Form;
