import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((box) => (
          <li key={box._id}>
            <Link to={`/mailboxes/${box._id}`}> Mailbox {box._id} </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;
