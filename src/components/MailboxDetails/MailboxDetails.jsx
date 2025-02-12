import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const mailbox = props.mailboxes.find((mailbox) => {
    return mailbox._id === Number(mailboxId);
  });

  const myLetters = props.letters.filter((letter) => {
    return mailbox._id === Number(letter.recipient);
  });
  return (
    <main>
      {!mailbox ? (
        <h1>Mailbox Not Found</h1>
      ) : (
        <div>
          <h1>Mailbox {mailbox._id}</h1>
          <h2>Details </h2>
          <dl key={mailbox._id}>
            <dt> Boxholder: {mailbox.boxOwner} </dt>
            <dd></dd>
            <dt> Size: {mailbox.size} </dt>
            <dd></dd>
            <dt>
              {myLetters.length > 0
                ? `You've got Mail! ${myLetters.length} letters have arrived!`
                : "You have no letters in your mailbox"}
            </dt>
            {myLetters.map((letter) => (
              <div key={letter._id}>
                <dt>From: {letter.sender}</dt>
                <dd></dd>
                <dt>Letter: {letter.message}</dt>
                <dd></dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </main>
  );
};

export default MailboxDetails;

// go over the params and find again !!
// line 20 requires a key?
