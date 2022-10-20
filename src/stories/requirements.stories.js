import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Tab, TabPanel, Tabs } from "../components/Tabs";

const stroies = storiesOf("GetThingsDone", module);

stroies.add("Tabs", () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabHandler = (val) => {
    setActiveTab(val);
  };
  return (
    <>
      <Tabs activeTab={activeTab} tabHandler={tabHandler}>
        <Tab label="All" index={0} />
        <Tab label="Photos" index={1} />
        <Tab label="Videos" index={2} />
      </Tabs>

      <TabPanel activeTab={activeTab} index={0}>
       One
      </TabPanel>
      <TabPanel activeTab={activeTab} index={1}>
        Two
      </TabPanel>
      <TabPanel activeTab={activeTab} index={2}>
        Three
      </TabPanel>
    </>
  );
});
