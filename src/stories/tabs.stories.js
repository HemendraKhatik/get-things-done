import React, { useState } from "react";
import { Tab, TabPanel, Tabs } from "../components/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabHandler = (val) => {
    setActiveTab(val);
  };

  return (
    <>
      <Tabs style={args.style} activeTab={activeTab} tabHandler={tabHandler}>
        {args.tabs.map((label, index) => {
          return <Tab key={index} label={label} index={index} />;
        })}
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
};

export const TabsComponent = Template.bind({});

TabsComponent.args = {
  tabs: ["Tab 1", "Tab 2", "Tab 3"],
  style: { gap: 10 },
};
