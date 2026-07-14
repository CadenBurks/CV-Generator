import { useState } from "react";

function EducationPreview({
  entry,
  isActive,
  onActivate,
  onCancel,
  onUpdate,
  onDelete,
}) {
  const [draft, setDraft] = useState({ ...entry });

  function handleSubmit(event) {
    event.preventDefault();
    onUpdate(entry.id, draft);
    onCancel();
  }

  if (isActive) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="school-name">School</label>
          <input
            type="text"
            id="school-name"
            value={draft.school}
            onChange={(event) =>
              setDraft({ ...draft, school: event.target.value })
            }
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="degree-type">Degree</label>
          <input
            type="text"
            id="degree-type"
            value={draft.degree}
            onChange={(event) =>
              setDraft({ ...draft, degree: event.target.value })
            }
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            value={draft.startDate}
            onChange={(event) =>
              setDraft({ ...draft, startDate: event.target.value })
            }
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            id="end-date"
            value={draft.endDate}
            onChange={(event) =>
              setDraft({ ...draft, endDate: event.target.value })
            }
            required
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => onDelete(entry.id)}>
            Delete
          </button>
        </div>
      </form>
    );
  }
  return (
    <div className="education-preview" onClick={onActivate}>
      <div className="education-name">{entry.school}</div>
    </div>
  );
}

export default EducationPreview;
