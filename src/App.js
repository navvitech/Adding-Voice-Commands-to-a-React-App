import React, { useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import CustomRoutes from "./customRoutes";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const { REACT_APP_Alan_SDK_Key, REACT_APP_Alan_SDK_Key_Production } =
    process.env;
  const alanBtnInstance = useRef(null);
  const Alan_SDK_Key =
    process.env.NODE_ENV !== "production"
      ? REACT_APP_Alan_SDK_Key
      : REACT_APP_Alan_SDK_Key_Production;
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: Alan_SDK_Key,
        onCommand: ({ command, route }) => {
          if (command === "navigate") {
            navigate(route);
          }
        },
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <CustomRoutes />
    </div>
  );
};
export default App;
