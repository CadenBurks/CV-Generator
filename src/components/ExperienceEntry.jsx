function ExperienceEntry({ entry }) {
  return (
    <div className="experience-entry">
      <div className="dates">
        <div>{entry.startDate}</div>
        <div>{entry.endDate}</div>
      </div>
      <div className="experience-info">
        <div className="company-name">{entry.company}</div>
        <div className="job-position">{entry.position}</div>
        <div className="job-description">{entry.desc}</div>
      </div>
    </div>
  );
}

export default ExperienceEntry;
