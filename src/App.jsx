import { useState } from "react";
import PersonalInformationSection from "./components/PersonalInformationSection";
import EducationEntry from "./components/EducationEntry";
import EducationPreview from "./components/EducationPreview";
import ExperienceEntry from "./components/ExperienceEntry";
import ExperiencePreview from "./components/ExperiencePreview";
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

  const [activeEducationEntryID, setActiveEducationEntryID] = useState(null);

  const [experienceList, setExperienceList] = useState([
    {
      id: crypto.randomUUID(),
      company: "Company",
      position: "Employee",
      desc: "I worked as an Employee at Company.",
      startDate: "2024-08",
      endDate: "2024-12",
    },
  ]);

  const [activeExperienceEntryID, setActiveExperienceEntryID] = useState(null);

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
    setActiveEducationEntryID(newEntry.id);
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
    setActiveEducationEntryID(null);
  }

  function createEmptyExperienceEntry() {
    return {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      desc: "",
      startDate: "",
      endDate: "",
    };
  }

  function addExperienceEntry() {
    const newEntry = createEmptyExperienceEntry();
    setExperienceList([...experienceList, newEntry]);
    setActiveExperienceEntryID(newEntry.id);
  }

  function updateExperienceEntry(id, updatedEntry) {
    setExperienceList(
      experienceList.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEntry } : entry,
      ),
    );
  }

  function deleteExperienceEntry(id) {
    setExperienceList(experienceList.filter((entry) => entry.id !== id));
    setActiveExperienceEntryID(null);
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
    setExperienceList([]);
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
              isActive={activeEducationEntryID === entry.id}
              onActivate={() => setActiveEducationEntryID(entry.id)}
              onCancel={() => setActiveEducationEntryID(null)}
              onUpdate={updateEducationEntry}
              onDelete={deleteEducationEntry}
            />
          ))}
          <button className="add-education" onClick={addEducationEntry}>
            +
          </button>
        </div>
        <div className="experience-entries">
          <h1>Experience</h1>
          {experienceList.map((entry) => (
            <ExperiencePreview
              key={entry.id}
              entry={entry}
              isActive={activeExperienceEntryID === entry.id}
              onActivate={() => setActiveExperienceEntryID(entry.id)}
              onCancel={() => setActiveExperienceEntryID(null)}
              onUpdate={updateExperienceEntry}
              onDelete={deleteExperienceEntry}
            />
          ))}
          <button className="add-experience" onClick={addExperienceEntry}>
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
          {experienceList.map((entry) => (
            <ExperienceEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
