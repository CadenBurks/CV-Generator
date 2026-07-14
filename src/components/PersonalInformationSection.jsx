function PersonalInformationSection({ info }) {
  return (
    <div className="personal-information">
      <div>{info.name}</div>
      <div>{info.phone}</div>
      <div>{info.email}</div>
      <div>{info.address}</div>
    </div>
  );
}

export default PersonalInformationSection;
