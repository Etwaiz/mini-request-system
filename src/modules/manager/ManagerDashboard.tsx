import React, { useState } from "react";
import { useApp } from "../../context/useApp";
import type { RequestStatus } from "../../types/index";

export const ManagerDashboard: React.FC = () => {
  const { requests, updateRequestStatus, deleteRequest } = useApp();

  const [filter, setFilter] = useState<RequestStatus | "all">("all");

  const filteredRequests = requests.filter((req) => {
    if (filter === "all") return true;
    return req.status === filter;
  });

  return (
    <div className="manager-dashboard">
      <h2>Manager Dashboard</h2>
      <div className="filter-buttons">
        {(["all", "new", "in progress", "done"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`btn-filter ${filter === status ? "active" : ""}`}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="manager-requests">
        <h3>Requests List ({filteredRequests.length})</h3>
        

        {filteredRequests.length === 0 ? (
          <p>No requests found with this status.</p>
        ) : (
          <div className="requests-grid">
            {filteredRequests.map((req) => (
              <div key={req.id} className={`request-card status-${req.status}`}>
                <h4>{req.title}</h4>
                <p>{req.description}</p>
                <div className="request-meta">
                  <span className="status-badge">{req.status}</span>
                  <span className="date-badge">
                    {new Date(req.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="request-actions">
                  <button onClick={() => deleteRequest(req.id)} className="btn-delete">
                    Delete
                  </button>
                  
                  {req.status === "new" && (
                    <button
                      onClick={() => updateRequestStatus(req.id, "in progress")}
                      className="btn-action start"
                    >
                      Accept Request
                    </button>
                  )}
                  {req.status === "in progress" && (
                    <button
                      onClick={() => updateRequestStatus(req.id, "done")}
                      className="btn-action complete"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
