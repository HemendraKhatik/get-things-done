import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

function Tabs({ children,style,activeTab,tabHandler }) {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    try {
      const _tabs = children.map((child) => {
          console.log(child.props);
        return child;
      });
      setTabs(_tabs);
    } catch (err) {
      throw 'Opps please pass the children in Tab component';
    }
  }, []);

  return (
    <div style={style} className={styles.tabs}>
      {tabs.map((tab,index) => {
        return <div key={index} onClick={()=>tabHandler(index)} className={activeTab==index?styles.activeTab:styles.tab}>{tab}</div>;
      })}
    </div>
  );
}

const Tab = ({ children, label }) => {
  if (label) {
    return <span>{label}</span>;
  }
  return children;
};

const TabPanel = ({ children,activeTab,index }) => {
    if(activeTab === index){
        return children;
    }
    return;
};

export { Tabs, Tab, TabPanel };
