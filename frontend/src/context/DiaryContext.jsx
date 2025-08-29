//purpose is automatic mangita og diary sa ge hatag nga email sa props

import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const DiaryContext = createContext();

export const DiaryProvider = ({children, email}) => {
  const { user } = useContext(UserContext);
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchDiares = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/diares/display", {email: user.email});

        if (response.data.success) {
          setDiaries(response.data.diaries);
        }
      } catch (error) {
        console.log("error in diary context axios", error);
      }
    };

    fetchDiares();
  }, [user?.email]);

  return (
    <DiaryContext.Provider value={{diaries, setDiaries}}>
      {children}
    </DiaryContext.Provider>
  );
};