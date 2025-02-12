import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = { recipient: "", message: "", sender: "" };

export default function LetterFrom(props) {
  const [newLetter, setNewLetter] = useState(initialState);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    props.addLetter(newLetter);
    setNewLetter(initialState);
    navigate(`/mailboxes/${newLetter.recipient}`);
  }

  function onChange(e) {
    setNewLetter({ ...newLetter, [e.target.name]: e.target.value });
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">Your Name:</label>
        <input
          type="text"
          name="sender"
          id="sender"
          value={newLetter.from}
          onChange={onChange}
        />
        <label htmlFor="recipient">Send Letter to:</label>
        <select
          name="recipient"
          id="recipient"
          value={newLetter.recipient}
          onChange={onChange}
        >
          <option value="" disabled>
            Choose a recipient
          </option>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox.boxOwner}
            </option>
          ))}
        </select>

        <label htmlFor="message">Letter Content</label>
        <textarea
          name="message"
          id="message"
          value={newLetter.message}
          onChange={onChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </main>
  );
}
