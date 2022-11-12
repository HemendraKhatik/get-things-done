import { useState } from "react";
import { Tab, TabPanel, Tabs } from "../../components/Tabs";
import styles from "../index.module.css";
import HomeIcon from "../../assets/icons/home.svg";
import AboutIcon from "../../assets/icons/about.svg";
import CallIcon from "../../assets/icons/call.svg";

export const ExampleTabs = ({ args }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabHandler = (val) => {
    setActiveTab(val);
  };

  return (
    <>
      <Tabs
        activeTabStyle={args.activeTabStyle}
        deActiveTabStyle={args.deActiveTabStyle}
        indicatorColor={args.indicatorColor}
        style={args.style}
        activeTab={activeTab}
        tabHandler={tabHandler}
      >
        {args.tabs.map((label, index) => {
          return (
            <Tab
              tabStyle={args.tabStyle}
              key={index}
              label={label}
              index={index}
            />
          );
        })}
      </Tabs>

      <TabPanel activeTab={activeTab} index={0}>
        <div className={styles.tab}>One</div>
      </TabPanel>
      <TabPanel activeTab={activeTab} index={1}>
        <div className={styles.tab}>Two</div>
      </TabPanel>
      <TabPanel activeTab={activeTab} index={2}>
        <div className={styles.tab}>Three</div>
      </TabPanel>
    </>
  );
};

export const ExampleTabs2 = ({ args }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabHandler = (val) => {
    setActiveTab(val);
  };

  return (
    <>
      <Tabs
        activeTabStyle={args.activeTabStyle}
        deActiveTabStyle={args.deActiveTabStyle}
        indicatorColor={args.indicatorColor}
        style={args.style}
        activeTab={activeTab}
        tabHandler={tabHandler}
      >
        {args.tabs.map((child, index) => {
          return (
            <Tab key={index}>
              {child}
            </Tab>
          );
        })}
      </Tabs>

      <TabPanel activeTab={activeTab} index={0}>
        <div className={styles.tab}>One</div>
      </TabPanel>
      <TabPanel activeTab={activeTab} index={1}>
        <div className={styles.tab}>Two</div>
      </TabPanel>
      <TabPanel activeTab={activeTab} index={2}>
        <div className={styles.tab}>Three</div>
      </TabPanel>
    </>
  );
};

export const IconOne = () => {
  return (
    <div
      style={{
        height: 30,
        display: "flex",
        alignItems:"center",
        gap: 10,
        padding:"0px 10px",
      }}
    >
      <img width="24px" height="24px" src={HomeIcon} alt="Home icon" />
      <p style={{color:"#ffffff"}}>Home</p>
    </div>
  );
};

export const IconTwo = () => {
  return (
    <div
      style={{
        height: 30,
        display: "flex",
        alignItems:"center",
        gap: 10,
        padding:"0px 10px",
      }}
    >
      <img width="24px" height="24px" src={AboutIcon} alt="Home icon" />
      <p style={{color:"#ffffff"}}>About</p>
    </div>
  );
};

export const IconThree = () => {
  return (
    <div
      style={{
        height: 30,
        display: "flex",
        alignItems:"center",
        gap: 10,
        padding:"0px 10px",
      }}
    >
      <img width="24px" height="24px" src={CallIcon} alt="Call icon" />
      <p style={{color:"#ffffff"}}>Contact</p>
    </div>
  );
};
