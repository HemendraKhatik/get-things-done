import React from "react";
import { UploadMedia } from "../../components";
import styles from "../index.module.css";

export function ExampleComponent({ args }) {
  return (
    <UploadMedia
      multiple={args.multiple}
      getFiles={args.getFiles}
      draging={args.draging}
      style={args.style}
      PlaceHolderComponent={args.PlaceHolderComponent}
    />
  );
}

export const CustomSelectFileComp = ({ files, deleteFile }) => {
  const fileHandler = (e, id) => {
    e.stopPropagation();
    deleteFile(id);
  };
  return (
    <div className={styles.customComp}>
      {files.length === 0 ? (
        <span>Upload file now</span>
      ) : (
        <>
          <img width={20} height={20} src={files[0].url} />
          <span>{files[0].name}</span>
          <span onClick={(e) => fileHandler(e, files[0].id)}>x</span>
        </>
      )}
    </div>
  );
};
