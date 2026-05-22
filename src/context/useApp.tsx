import { createContext, useContext } from "react";
import type { UserRole, UserRequest, RequestStatus } from "../types/index";

export interface AppContextType {
  role: UserRole;
  requests: UserRequest[];
  changeRole: (role: UserRole) => void;
  addRequest: (title: string, description: string) => void;
  updateRequestStatus: (id: string, newStatus: RequestStatus) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppContextProvider");
  }

  return context;
};
