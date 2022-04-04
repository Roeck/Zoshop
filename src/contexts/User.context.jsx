import { createContext, useState } from "react";

// Actual value to access:
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  
  // User provider will wrap around the "App" child component:
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};