import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = { boxOwner: "", size: "small" };

const MailboxForm = (props) => {
  const [newBoxData, setNewBoxData] = useState(initialState);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    props.addBox(newBoxData);
    setNewBoxData(initialState);
    navigate("/mailboxes");
  }

  function onChange(e) {
    setNewBoxData({ ...newBoxData, [e.target.name]: e.target.value });
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={newBoxData.boxOwner}
          onChange={onChange}
          placeholder="Boxholder Name"
        />

        <label htmlFor="size">Select a Box Size: </label>
        <select
          id="size"
          name="size"
          onChange={onChange}
          value={newBoxData.size}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </main>
  );
};

export default MailboxForm;

// console is not a fan of 'selected'
