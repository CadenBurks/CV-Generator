import { useState } from "react";
import PersonalInformationSection from "./components/PersonalInformationSection";
import EducationEntry from "./components/EducationEntry";
import EducationPreview from "./components/EducationPreview";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    phone: "123-123-1234",
    email: "johndoe@email.com",
    address: "123 Fascination St",
  });

  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      school: "Ball So Hard University",
      degree: "Ph.D. in Mathematics",
      startDate: "2020-08",
      endDate: "2028-04",
    },
  ]);

  const [activeEntryID, setActiveEntryID] = useState(null);

  function createEmptyEducationEntry() {
    return {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
  }

  function addEducationEntry() {
    const newEntry = createEmptyEducationEntry();
    setEducationList([...educationList, newEntry]);
    setActiveEntryID(newEntry.id);
  }

  function updateEducationEntry(id, updatedEntry) {
    setEducationList(
      educationList.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEntry } : entry,
      ),
    );
  }

  function deleteEducationEntry(id) {
    setEducationList(educationList.filter((entry) => entry.id !== id));
    setActiveEntryID(null);
  }

  const emptyPersonalInfo = {
    name: "",
    phone: "",
    email: "",
    address: "",
  };

  function clearAll() {
    setPersonalInfo(emptyPersonalInfo);
    setEducationList([]);
  }

  return (
    <main>
      <div className="edit-section">
        <button className="clear-all" onClick={clearAll}>
          Clear
        </button>
        <form className="personal-info-form">
          <h1>Personal Information</h1>
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
        <div className="education-entries">
          <h1>Education</h1>
          {educationList.map((entry) => (
            <EducationPreview
              key={entry.id}
              entry={entry}
              isActive={activeEntryID === entry.id}
              onActivate={() => setActiveEntryID(entry.id)}
              onCancel={() => setActiveEntryID(null)}
              onUpdate={updateEducationEntry}
              onDelete={deleteEducationEntry}
            />
          ))}
          <button className="add-education" onClick={addEducationEntry}>
            +
          </button>
        </div>
      </div>

      <div className="cv-section">
        <PersonalInformationSection info={personalInfo} />
        <div className="education-section">
          <h2>Education</h2>
          {educationList.map((entry) => (
            <EducationEntry key={entry.id} entry={entry} />
          ))}
        </div>
        <div className="experience-section">
          <h2>Experience</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
