import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import DeleteIcon from "../../../assets/icons/delete.svg";
import UploadIcon from "../../../assets/icons/upload.svg";
import PropTypes from "prop-types";

function FileComponent({ deleteFile, file }) {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mouseover = () => {
      if (hover) return;
      setHover(true);
    };
    const mouseout = () => {
      setHover(false);
    };

    ref?.current?.addEventListener("mouseover", mouseover);
    ref?.current?.addEventListener("mouseout", mouseout);

    return () => {
      ref?.current?.removeEventListener("mouseover", mouseover);
      ref?.current?.removeEventListener("mouseout", mouseout);
    };
  }, []);

  let FILE;
  switch (file.type) {
    case "image":
      FILE = () => (
        <div className={styles.fileContainer}>
          <img
            alt="file icon"
            layout="fixed"
            width="100%"
            height="100%"
            src={file.url}
          />
        </div>
      );
      break;
    case "video":
      FILE = () => (
        <div className={styles.fileContainer}>
          <video width="100%" height="100%" controls>
            <source src={file.url} type="video/mp4" />
          </video>
        </div>
      );
      break;
    default:
      FILE = () => (
        <div className={styles.fileContainer}>
          <iframe
            src={file.url}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: 10,
            }}
          ></iframe>
        </div>
      );
  }
  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onClick={() => deleteFile(file.id)}
    >
      <FILE />

      {hover && (
        <div className={styles.hover}>
          <img
            alt="file icon"
            layout="fixed"
            width={32}
            height={32}
            src={DeleteIcon}
          />
        </div>
      )}
    </div>
  );
}

export function DragAndDrop({ getFiles, style }) {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [showFiles, setShowFiles] = useState(true);
  const ref = useRef(null);

  const generateId = () => Math.ceil(Math.random(9) * 1000000);

  const fileHandler = (e, isDragged) => {
    const updateFiles = files;

    if (isDragged) {
      for (let file of e.dataTransfer.files) {
        let type;
        if (file.type.includes("image")) {
          type = "image";
        } else if (file.type.includes("video")) {
          type = "video";
        } else {
          type = "doc";
        }
        updateFiles.push({
          url: URL.createObjectURL(file),
          name: file.name,
          id: generateId(),
          size: file.size / 1000,
          type,
        });
      }
      setFiles(updateFiles);
      // sending files to parent
      getFiles(updateFiles);
      setShowFiles(updateFiles.length === 0);
      return;
    }

    for (let file of e.target.files) {
      let type;
      if (file.type.includes("image")) {
        type = "image";
      } else if (file.type.includes("video")) {
        type = "video";
      } else {
        type = "doc";
      }
      updateFiles.push({
        url: URL.createObjectURL(file),
        name: file.name,
        id: generateId(),
        size: file.size / 1000,
        type,
      });
    }
    setFiles(updateFiles);
    // sending files to parent
    getFiles(updateFiles);

    setShowFiles(updateFiles.length === 0);
  };

  const deleteFile = (id) => {
    const updateFiles = files.filter((file) => file.id !== id);
    setFiles(updateFiles);
    setShowFiles(updateFiles.length === 0);
  };

  useEffect(() => {
    const dragover = (e) => {
      // Preventing file to open in a new tab
      e.preventDefault();

      setDragging(true);
    };
    ref?.current?.addEventListener("dragover", dragover);

    const dragleave = (e) => {
      // Preventing file to open in a new tab
      e.preventDefault();
      setDragging(false);
    };
    ref?.current?.addEventListener("dragleave", dragleave);

    const drop = (e) => {
      e.preventDefault();
      fileHandler(e, true);
      setDragging(false);
    };
    ref?.current?.addEventListener("drop", drop);

    return () => {
      ref?.current?.removeEventListener("dragover", dragover);
      ref?.current?.removeEventListener("dragleave", dragleave);
      ref?.current?.removeEventListener("drop", drop);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: "relative", ...style }}
      className={styles.container}
    >
      {dragging && <div className={styles.hoverOverLay}></div>}

      {showFiles ? (
        <div className={styles.upload}>
          <img
            alt="file icon"
            width={32}
            height={32}
            src={UploadIcon}
          />
          <input
            onChange={fileHandler}
            className={styles.file}
            type="file"
            multiple={true}
          />
        </div>
      ) : (
        <div className={styles.files}>
          {files.map((file, index) => {
            return (
              <React.Fragment key={index}>
                <FileComponent file={file} deleteFile={deleteFile} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

FileComponent.propTypes = {
  deleteFile: PropTypes.func,
  file: PropTypes.object,
};

DragAndDrop.propTypes = {
  getFiles: PropTypes.func,
  style: PropTypes.object,
};
