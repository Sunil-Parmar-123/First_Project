import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [Switches, setSwitches] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [alertMsg, setAlert] = useState("");

  const showAlert = (massage, type) => {
    setAlert({ msg: massage, type: type });
    setTimeout(() => {
      setAlert("");
    }, 2500);
  };
  const toggleName = () => {
    if (mode === "dark") {
      setMode("light");
      setSwitches("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable Successfully", "success");
      document.title = "TextConverter - DarkMode";

      setInterval(() => {
        document.title = "TextConverter ??";
      }, 2000);
      setInterval(() => {
        document.title = "TextConverter !!";
      }, 1700);
    } else {
      setMode("dark");
      setSwitches("Enable Light Mode");
      document.body.style.backgroundColor = "#114377";
      showAlert("Dark Mode Enable Successfully", "success");
      document.title = "TextConverter - DarkMode";

      setInterval(() => {
        document.title = "TextConverter ??";
      }, 2000);
      setInterval(() => {
        document.title = "TextConverter !!";
      }, 1700);
    }
  };
  return (
    <>
      <Navbar
        title="TextConverter"
        link="AboutUs"
        mode={mode}
        switch1={Switches}
        toggleName={toggleName}
      />
      <Alert alert={alertMsg} />
      <div className="container my-3">
        <AboutUs mode={mode}/>

        <TextArea
          showAlert={showAlert}
          title="Input Any Text Convert to UpperCase :-"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
