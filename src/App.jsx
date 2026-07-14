import { useState } from "react";
import PersonalInformationSection from "./components/PersonalInformationSection";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    phone: "123-123-1234",
    email: "johndoe@email.com",
    address: "123 Fascination St",
  });

  const emptyPersonalInfo = {
    name: "",
    phone: "",
    email: "",
    address: "",
  };

  function clearAll() {
    setPersonalInfo(emptyPersonalInfo);
  }

  return (
    <main>
      <div className="edit-section">
        <button className="clear-all" onClick={clearAll}>
          Clear
        </button>
        <form className="personal-info-form">
          <div className="input-container">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="First and last name"
              value={personalInfo.name}
              onChange={(event) =>
                setPersonalInfo({ ...personalInfo, name: event.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="XXX-XXX-XXXX"
              value={personalInfo.phone}
              onChange={(event) =>
                setPersonalInfo({ ...personalInfo, phone: event.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="name@example.com"
              value={personalInfo.email}
              onChange={(event) =>
                setPersonalInfo({ ...personalInfo, email: event.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="address">Location</label>
            <input
              type="text"
              id="address"
              placeholder="123 ABC Street"
              value={personalInfo.address}
              onChange={(event) =>
                setPersonalInfo({
                  ...personalInfo,
                  address: event.target.value,
                })
              }
            />
          </div>
        </form>
      </div>
      <div className="cv-section">
        <PersonalInformationSection info={personalInfo} />
        <div className="education-section">
          <h2>Education</h2>
        </div>
        <div className="experience-section">
          <h2>Experience</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
