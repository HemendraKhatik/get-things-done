import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

function Tabs({
  children,
  style,
  activeTab,
  tabHandler,
  indicatorColor,
  activeTabStyle,
  deActiveTabStyle,
}) {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    try {
      const _tabs = children.map((child) => {
        return child;
      });
      setTabs(_tabs);
    } catch (err) {
      throw "Opps please pass the children in Tab component";
    }
  }, []);

  return (
    <div style={style} className={styles.tabs}>
      {tabs.map((tab, index) => {
        const style =
          indicatorColor && activeTab === index
            ? activeTabStyle
              ? {
                  borderBottom: `2px solid ${indicatorColor}`,
                  ...activeTabStyle,
                }
              : { borderBottom: `2px solid ${indicatorColor}` }
            : activeTabStyle && activeTab === index
            ? activeTabStyle
            : deActiveTabStyle
            ? deActiveTabStyle
            : {};
        return (
          <div
            key={index}
            onClick={() => tabHandler(index)}
            style={style}
            className={activeTab == index ? styles.activeTab : styles.tab}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
}

const Tab = ({ children, label, tabStyle }) => {
  if (children) {
    return children;
  }
  return <span style={tabStyle}>{label}</span>;
};

const TabPanel = ({ children, activeTab, index }) => {
  if (activeTab === index) {
    return children;
  }
  return;
};

Tabs.propTypes = {
  style: PropTypes.object,
  activeTab: PropTypes.number,
  tabHandler: PropTypes.func,
};

Tab.propTypes = {
  label: PropTypes.string,
};

TabPanel.propTypes = {
  activeTab: PropTypes.number,
  index: PropTypes.number,
};

export { Tabs, Tab, TabPanel };
