import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";
import { Route, Routes } from "react-router";

const testState = [
  { _id: 1, boxOwner: "James ", size: "small" },
  { _id: 2, boxOwner: "Samatha ", size: "medium" },
  { _id: 3, boxOwner: "Minny ", size: "large" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(testState); // reset to empty array after

  function addBox(newBoxData) {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              {" "}
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
};

export default App;

/*
Done: 
established navbar and Links
put NavBar component into html
creates routes with components for all urls
created a state for mailboxes - array 
created outline for lifting function addbox, 
passed function into MailboxForm component 
imported all components 

!/downloaded  npm i react-router
import route, routes 
!/ import { BrowserRouter } from "react-router";
!/ wrap App component in MAIN.JSX in <BrowserRouter></BrowserRouter>

created the form 
created handle functions 
prevented default submit 
set teh new box data 
passed the new box dat to the add box function 
reset teh state 
sent the user to the mailpaxes page 
add an id to the new box
add the new box to the lis of bmailboxes/state 

pass mailboxes into mailbox component 
mapped out all the boxes 
linke them by their _id 
created test boxes for initial design 

pass the mailboxes into details component 

done:
import useparams
catch the params with destructing - use the id # from the url
use .find to render the box that matches the id in the url
return the mail box  with an id that matche the url number

mailbox not found not all other non-exitent url 
i checked if  mailbox exists not mailbox._id 
{!mailbox ? (<h1>Mailbox Not Found</h1>) : (... 

fixed teh input select but the console get an error for 'selected' 
set the initial size value to small 
instead of 
<option value="" disabled selected>
    Select an option
</option>
this allows the user to not elext anythign and default to small 
also added a value={newboxdata.value} into the slect element 

to do : 
level up 
*/
