function EducationEntry({ entry }) {
  return (
    <div className="education-entry">
      <div className="dates">
        <div>{entry.startDate}</div>
        <div>{entry.endDate}</div>
      </div>
      <div className="school-info">
        <div>{entry.school}</div>
        <div>{entry.degree}</div>
      </div>
    </div>
  );
}

export default EducationEntry;
