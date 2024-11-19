import React, { useState } from "react";
import classes from "./appointment.module.css";

export default function Appointment() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState("");
  return (
    <div className={classes.container}>
      <div className={classes.inputholder}>
        <label className={classes.inputname}>Name:</label>
        <div className={classes.inputfield}>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className={classes.inputholder}>
        <label className={classes.inputname}>Age:</label>
        <div className={classes.inputfield}>
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="" disabled>
              Select Age
            </option>
            {Array.from({ length: 101 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={classes.inputholder}>
        <label className={classes.inputname}>Medical History:</label>
        <div className={classes.inputfield}>
          <input type="file" onChange={(e) => setFile(e.target.value)} />
        </div>
      </div>
      <div className={classes.button}>Submit</div>
    </div>
  );
}
