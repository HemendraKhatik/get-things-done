import React, { useState } from "react";
import styles from "./index.module.css";
import AddIcon from "../../../assets/icons/plus.svg";
import PropTypes from "prop-types";

function SelectFile({ getFiles, style, PlaceHolderComponent, multiple }) {
  const [files, setFiles] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  const generateId = () => Math.ceil(Math.random(9) * 1000000);

  const fileHandler = (e) => {
    let update = files;
    for (let _file of e.target.files) {
      let type;
      if (_file.type.includes("image")) {
        type = "image";
      } else if (_file.type.includes("video")) {
        type = "video";
      } else {
        type = "doc";
      }
      const data = {
        url: URL.createObjectURL(_file),
        name: _file.name,
        id: generateId(),
        size: _file.size / 1000,
        type,
      };
      if (multiple) {
        update.push(data);
      } else {
        update = [data];
      }
    }
    setFiles(update);
    // sending files to parent
    getFiles(update);

    // TRICK: Here we're forcing component to re-render because we if change an array in react it does not get re-render
    // and if we don't do this we won't be able to send updated files data in parent
    setForceUpdate(true);
  };

  const deleteFile = (id) => {
    const updateFiles = files.filter((file) => file.id !== id);
    setFiles(updateFiles);
  };
  return (
    <div
      style={style}
      className={PlaceHolderComponent?styles.container2:styles.container}
    >
      <input
        onChange={fileHandler}
        className={styles.file}
        type="file"
        multiple={multiple}
      />
      {PlaceHolderComponent ? (
        <PlaceHolderComponent
          forceUpdate={forceUpdate}
          files={files}
          deleteFile={deleteFile}
        />
      ) : (
        <DefaultPlaceHolderComponent
          forceUpdate={forceUpdate}
          files={files}
          deleteFile={deleteFile}
        />
      )}
    </div>
  );
}
export default SelectFile;

function DefaultPlaceHolderComponent({ files, deleteFile }) {
  return (
    <div
      onClick={() => deleteFile(files[0].id)}
      className={styles.defaultPlaceHolderComponent}
    >
      {files.length === 1 ? files[0].name : "Upload file"}
      <img src={AddIcon} width={22} height={22} alt="Add Icon" />
    </div>
  );
}

DefaultPlaceHolderComponent.propTypes = {
  deleteFile: PropTypes.func,
  files: PropTypes.array,
};

SelectFile.propTypes = {
  getFiles: PropTypes.func,
  style: PropTypes.object,
  multiple: PropTypes.bool,
  PlaceHolderComponent: PropTypes.element,
};
