import React, { useState } from "react";
import styles from "./index.module.css";

export function Switch({ checked, onChange, disabled }) {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={disabled ? () => {} : onChange}
        checked={checked}
      />
      <span className={styles.slider}></span>
    </label>
  );
}
