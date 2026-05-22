import React, { useState, useEffect } from "react";
import type { UserRole, UserRequest, RequestStatus } from "../types/index";
import { AppContext } from "./useApp";
import type { AppContextType } from "./useApp";

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [role, setRole] = useState<UserRole>(() => {
    const savedRole = localStorage.getItem("role");
    return (savedRole as UserRole) || "user";
  });

  const [requests, setRequests] = useState<UserRequest[]>(() => {
    const savedRequests = localStorage.getItem("requests");
    return savedRequests ? JSON.parse(savedRequests) : [];
  });

  const changeRole = (newRole: UserRole) => {
    setRole(newRole);
  };

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  const addRequest = (title: string, description: string) => {
    const newRequest: UserRequest = {
      id: crypto.randomUUID(),
      title,
      description,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    setRequests((prevRequests) => [newRequest, ...prevRequests]);
  };

  const updateRequestStatus = (id: string, newStatus: RequestStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req,
      ),
    );
  };

  const value: AppContextType = {
    role,
    requests,
    changeRole,
    addRequest,
    updateRequestStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
