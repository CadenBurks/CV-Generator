function ExperienceEntry({ entry }) {
  return (
    <div className="experience-entry">
      <div className="dates">
        <div>{entry.startDate}</div>
        <div>{entry.endDate}</div>
      </div>
      <div className="experience-info">
        <div>{entry.company}</div>
        <div>{entry.position}</div>
        <div>{entry.desc}</div>
      </div>
    </div>
  );
}

export default ExperienceEntry;
