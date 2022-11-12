import React, { useState } from 'react';
import styles from "./index.module.css"

export function Switch() {
    const [checked, setChecked] = useState(false)
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={()=>setChecked(!checked)} checked={checked} />
      <span className={styles.slider}></span>
    </label>
  );
}
