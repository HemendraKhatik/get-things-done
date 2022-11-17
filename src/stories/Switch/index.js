import React, { useState } from "react";
import { Switch } from "../../components/Switch";

export function ExampleComponent() {
  const [checked, setChecked] = useState(false);
  const onChange = ()=>setChecked(!checked);
  return (
    <div style={{textAlign:"center",backgroundColor:"#f2f2f2",padding:10}}>
      <Switch disabled  onChange={onChange} checked={checked}/>
    </div>
  );
}
