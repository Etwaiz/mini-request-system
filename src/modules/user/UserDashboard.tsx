import React, { useState } from "react";
import { useApp } from "../../context/useApp";

export const UserDashboard: React.FC = () => {
  const { requests, addRequest } = useApp();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    addRequest(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>

      <form onSubmit={handleSubmit} className="request-form">
        <h3>Create New Request</h3>
        <div className="form-group">
          <label>Request Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Monitor is not working"
          />
        </div>
        <div className="form-group">
          <label>Problem Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the problem details..."
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit Request
        </button>
      </form>

      <hr />

      <div className="user-requests">
        <h3>My Requests ({requests.length})</h3>
        {requests.length === 0 ? (
          <p>You don't have any requests created yet.</p>
        ) : (
          <ul className="requests-list">
            {requests.map((req) => (
              <li key={req.id} className={`request-item status-${req.status}`}>
                <h4>{req.title}</h4>
                <p>{req.description}</p>
                <div className="request-meta">
                  <span className="status-badge">{req.status}</span>
                  <span className="date-badge">
                    {new Date(req.createdAt).toLocaleString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
