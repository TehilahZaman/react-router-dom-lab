import "../../index.css";
import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      {props.mailboxes.length === 0 ? "There are no mailboxes here" : " "}
      <ul>
        {props.mailboxes.map((box) => (
          <li className="mail-box" key={box._id}>
            <Link to={`/mailboxes/${box._id}`}> Mailbox {box._id} </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;

// styling: you can also add the classname to the container element - name it after component
// and in css target everything or target specific elements
// .navbar li {}
//.mail-box Link{}
// make css file in same file as component
// also : var(name--) like var(--main-bbg-color)
// inside of css you can use this and then in index define it (like color)
// this allows you to apply this variable to multiple elements and only change it in one palce
