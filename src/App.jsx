import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "@vibe/core/tokens";
//Explore more Monday React Components here: https://vibe.monday.com/
import { AttentionBox } from "@vibe/core";

// Usage of mondaySDK example, for more information visit here: https://developer.monday.com/apps/docs/introduction-to-the-sdk/
const monday = mondaySdk();

const App = () => {
  console.log("🔥🔥🔥 React app mounted 🔥🔥🔥");
  const [context, setContext] = useState();

  useEffect(() => {
    monday.execute("valueCreatedForUser");
  
    monday.listen("context", (res) => {
      console.log("✅ Context received:", res.data); // <-- ADD THIS
      setContext(res.data);
    });
  }, []);
  

  //Some example what you can do with context, read more here: https://developer.monday.com/apps/docs/mondayget#requesting-context-and-settings-data
  const attentionBoxText = `Hello, your user_id is: ${
    context ? context.user.id : "still loading"
  }.
  Let's start building your amazing app, which will change the world!`;

  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem", color: "red" }}>🎯 MOUNTED INSIDE MONDAY</h1>
      <AttentionBox
        title="Hello Monday Apps!"
        text={attentionBoxText}
        type="success"
      />
    </div>
  );
};

export default App;
