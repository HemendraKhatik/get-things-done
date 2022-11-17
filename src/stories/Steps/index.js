import React, {useRef } from "react";
import { Step, Steps } from "../../components";
import Button from "../../components/Button";

export function ExampleComponent() {

  const childRef = useRef(null);

  const goBack = () => childRef.current.goBack();

  const goNext = () => childRef.current.goNext();

  const finish = ()=>{
    alert("Do something magical")
    goNext();
  }
  return (
    <Steps ref={childRef}>
      <Step>
        <div style={{ height: 100,backgroundColor: "#f2f2f2",padding:20 }}>
          <p>Step one</p>
          <Button type="fill" onClick={goNext}>Next</Button>
        </div>
      </Step>
      <Step>
        <div style={{ height: 100, backgroundColor: "#f2f2f2",padding:20 }}>
          <p>Step Two</p>
          <Button type="fill" onClick={goNext}>Next</Button>
          <Button onClick={goBack}>Back</Button>
        </div>
      </Step>
      <Step>
        <div style={{ height: 100, backgroundColor: "#f2f2f2",padding:20 }}>
          <p>Step Three</p>
          <Button type="fill" onClick={finish}>Finish</Button>
          <Button onClick={goBack}>Back</Button>
        </div>
      </Step>
    </Steps>
  );
}
