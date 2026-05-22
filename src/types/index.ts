export type UserRole = 'user' | 'manager';

export type RequestStatus = 'new' | 'in progress' | 'done';

export interface UserRequest {
  id: string;       
  title: string;   
  description: string;
  status: RequestStatus;
  createdAt: string;
}