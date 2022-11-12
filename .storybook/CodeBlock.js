import React, { useState } from "react";

import { LiveProvider, LiveEditor } from "react-live";

export function CodeBlock({ children }) {
  const [copy, setCopy] = useState(false);

  const copyCode = () => {
    setCopy(true);
    setTimeout(()=>{
      setCopy(false)
    },500);
    navigator.clipboard.writeText(children);
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#4947534a",
        color: "#f2f2f2",
        borderRadius: 10,
        padding: 10,
        paddingBottom:0,
        marginTop: 10,
        marginBottom: 10,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <LiveProvider style={{width:"100%",height:"100%"}} code={children}>
        <LiveEditor disabled />
      </LiveProvider>
      <div
        style={{
          color: "#f2f2f2",
          textAlign: "right",
          position: "absolute",
          top: 15,
          right: 10,
        }}
      >
        <span
          onClick={copyCode}
          style={{
            backgroundColor: "rgba(23, 58, 94, 0.5)",
            padding: 4,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {copy ? "copied" : "copy"}
        </span>
      </div>
    </div>
  );
}
