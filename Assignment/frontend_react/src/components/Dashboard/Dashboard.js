import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./dashboard.module.css";

export default function Dashboard() {
  const components = [
    "Home",
    "Appointment",
    "Self-Diagnosis",
    "Medicines",
    "About Us",
  ];
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      {components.map((componentName) => (
        <div
          className={classes.component}
          onClick={() => {
            if (componentName === "Home") {
              navigate("/");
            } else {
              navigate(`/${componentName.toLowerCase().replace(" ", "-")}`);
            }
          }}
        >
          {componentName}
        </div>
      ))}
    </div>
  );
}
