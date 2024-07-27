import { createContext, useContext, useState, useEffect } from "react";
import Loader from "../components/Loader";
import { account } from "./appwrite";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await account.get();
        setUser(response);
        // setTimeout(() => {}, 2000);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) {
    return <Loader />; // Replace with your loading spinner/component
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
