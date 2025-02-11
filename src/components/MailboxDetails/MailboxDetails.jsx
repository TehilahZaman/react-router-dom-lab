import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const mailbox = props.mailboxes.find((mailbox) => {
    return mailbox._id === Number(mailboxId);
  });
  console.log(mailbox);
  return (
    <main>
      {!mailbox ? (
        <h1>Mailbox Not Found</h1>
      ) : (
        <div>
          <h1>Mailbox {mailbox._id}</h1>
          <h2>Details </h2>
          <dl>
            <dt> Boxholder: {mailbox.boxOwner} </dt>
            <dd></dd>
            <dt> Size: {mailbox.size} </dt>
            <dd></dd>
          </dl>
        </div>
      )}
    </main>
  );
};

export default MailboxDetails;

// go over the params nad find again !!

