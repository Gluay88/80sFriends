import React, { useState } from "react";
import Employee from "./components/Employee";
import "./index.css";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;

  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <Employee name="Feynman" role="Intern" />
          <Employee name="Abbey" role={role} />
          <Employee name="John" />
        </div>
      ) : (
        <p>You can not see Employees!</p>
      )}
    </div>
  );
}

export default App;
