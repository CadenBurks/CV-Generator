import { useState } from "react";

function ExperiencePreview({
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
          <label htmlFor="company-name">Company</label>
          <input
            type="text"
            id="company-name"
            value={draft.company}
            onChange={(event) =>
              setDraft({ ...draft, company: event.target.value })
            }
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="position-name">Position</label>
          <input
            type="text"
            id="position-name"
            value={draft.position}
            onChange={(event) =>
              setDraft({ ...draft, position: event.target.value })
            }
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="job-desc">Description</label>
          <input
            type="text"
            id="job-desc"
            value={draft.desc}
            onChange={(event) =>
              setDraft({ ...draft, desc: event.target.value })
            }
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
    <div className="experience-preview" onClick={onActivate}>
      <div className="experience-name">{entry.company}</div>
    </div>
  );
}

export default ExperiencePreview;
