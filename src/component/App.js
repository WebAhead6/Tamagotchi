import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import UserName from "./UserName";
import UserImage from "./UserImage";
import getUserData from "../utlis/getUserData";
import Level from "./level";
import Button from "./Button";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const [userData, setUserData] = React.useState({});
  const [hideUserInput, setHideUserInput] = React.useState(false);

  const [number, setNumber] = React.useState(5);

  React.useEffect(() => {
    if (name) {
      setInterval(function () {
        setNumber((number) => number - 1);
      }, 1000);
    }
  }, [userData]);

  const handleClick = () => {
    getUserData(`https://api.github.com/users/${name}`)
      .then((data) => {
        setUserData(data);
        setHideUserInput(true);
        setNumber(5);
      })
      .catch(console.error);
  };

  const { avatar_url } = userData;

  return (
    <div className="App">
      <h6 className="title">Tamagotchi</h6>

      {!hideUserInput && (
        <UserName
          className="userName"
          name={name}
          handleName={handleName}
          handleClick={handleClick}
        />
      )}

      <UserImage
        className="image"
        imgeSrc={avatar_url}
        name={name}
        setUserData={setUserData}
        number={number}
        setNumber={setNumber}
        setName={setName}
        hideUserInput={hideUserInput}
        setHideUserInput={setHideUserInput}
      />
      {avatar_url ? <Level number={number} /> : ""}
      {avatar_url && number > 0 ? (
        <Button number={number} setNumber={setNumber} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
