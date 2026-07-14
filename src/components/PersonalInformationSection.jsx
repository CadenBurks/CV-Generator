function PersonalInformationSection({ info }) {
  return (
    <div className="personal-information">
      <div className="personal-name">{info.name}</div>
      <div className="personal-contact">
        <span>{info.phone}</span>
        <span>{info.email}</span>
        <span>{info.address}</span>
      </div>
    </div>
  );
}

export default PersonalInformationSection;
