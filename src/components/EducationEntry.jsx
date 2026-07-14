function EducationEntry({ entry }) {
  return (
    <div className="education-entry">
      <div className="dates">
        <div>{entry.startDate}</div>
        <div>{entry.endDate}</div>
      </div>
      <div className="school-info">
        <div className="school-name">{entry.school}</div>
        <div className="school-degree">{entry.degree}</div>
      </div>
    </div>
  );
}

export default EducationEntry;
