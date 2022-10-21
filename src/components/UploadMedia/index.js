import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css';
import DeleteIcon from "../../assets/icons/delete.svg";
import FileIcon from "../../assets/icons/file.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import PropTypes from 'prop-types';


function ImageComp({ deleteFile, file }) {
    const [hover, setHover] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const mouseover = () => setHover(true);
        const mouseout = () => setHover(false);

        ref?.current?.addEventListener("mouseover", mouseover);
        ref?.current?.addEventListener("mouseout", mouseout);

        return () => {
            ref?.current?.removeEventListener("mouseover", mouseover);
            ref?.current?.removeEventListener("mouseout", mouseout);
        }
    }, [])

    return (
        <div ref={ref} style={{ position: "relative" }} onClick={() => deleteFile(file.id)}>
            <img alt="file icon" layout="fixed" width={108} height={90} src={file.url} />
            {hover && <div className={styles.hover}>
                <img alt="file icon" layout="fixed" width={32} height={32} src={DeleteIcon} />
            </div>}
        </div>
    )
}

function UploadMedia({ text, subText, multiple = false, selectedFilePlaceholder,getFiles }) {
    const [files, setFiles] = useState([]);
    const [length, setLength] = useState(0);
    const [dragging, setDragging] = useState(false);

    const ref = useRef(null);


    const generateId = () => Math.ceil(Math.random(9) * 1000000);

    const fileHandler = (e, isDragged) => {
        const updateFiles = files;

        if (isDragged) {
            for (let file of e.dataTransfer.files) {
                updateFiles.push({ url: URL.createObjectURL(file), name: file.name, id: generateId(), size: file.size / 1000 });
            }
            setFiles(updateFiles);
            setLength(updateFiles.length);
             // sending files to parent
             getFiles(updateFiles)
            return;
        }

        for (let file of e.target.files) {
            updateFiles.push({ url: URL.createObjectURL(file), name: file.name, id: generateId(), size: file.size / 1000 });
        }
        setFiles(updateFiles);
        setLength(updateFiles.length);
        // sending files to parent
        getFiles(updateFiles);
    };

    const deleteFile = (id) => {
        const updateFiles = files.filter(file => file.id !== id);
        setFiles(updateFiles);
        setLength(updateFiles.length);
    }

   

    useEffect(() => {

        const dragover = (e) => {
            // Preventing file to open in a new tab
            e.preventDefault();
            setDragging(true);
        };
        ref?.current?.addEventListener("dragover", dragover)

        const dragleave = (e) => {
            // Preventing file to open in a new tab
            e.preventDefault();
            setDragging(false);
        };
        ref?.current?.addEventListener("dragleave", dragleave)


        const drop = (e) => {
            e.preventDefault();
            fileHandler(e, true);
            setDragging(false);
        };
        ref?.current?.addEventListener("drop", drop)

        return () => {
            ref?.current?.removeEventListener("dragover", dragover);
            ref?.current?.removeEventListener("dragleave", dragleave);
            ref?.current?.removeEventListener("drop", drop);
        }
    }, [])


    if (multiple) {
        return (
            <div ref={ref} style={{ position: "relative" }} className={styles.multipleFilesContainer} >
                <div className={styles.top}>
                    <div>
                        <h1>{text || "Select file"}</h1>
                        <p>{subText}</p>
                    </div>
                    <img alt="file icon" layout="fixed" width={24} height={24} src={FileIcon} />
                </div>

                {dragging && <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "green", opacity: 0.7 }}></div>}
                {
                    files.length === 0 ? (
                        <div className={styles.upload}>
                            <img alt="file icon" layout="fixed" width={32} height={32} src={UploadIcon} />
                        </div>
                    ) : (
                        <div className={styles.multipleFiles}>
                            {files.map((file, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ImageComp file={file} deleteFile={deleteFile} />
                                    </React.Fragment>
                                )
                            })}
                        </div>)
                }

            </div>
        )
    }

    if (length > 0 && !multiple) {
        return (
            <div className={styles.solidContainer}>
                <div>
                    <img alt="uploaded file" layout="fixed" width={130} height={74} src={files[0].url} />
                    <div className={styles.overlay}>
                        <span>{selectedFilePlaceholder || "file"}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>{files[0].name}</h1>
                        <p>{files[0].size} kb</p>
                    </div>
                    <img onClick={() => deleteFile(files[0].id)} alt="file icon" layout="fixed" width={24} height={24} src={DeleteIcon} />
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <input onChange={fileHandler} className={styles.file} type="file" multiple={multiple} />
            <div>
                <h1>{text || "Select file"}</h1>
                <p>{subText}</p>
            </div>
            <img alt="file icon" layout="fixed" width={24} height={24} src={FileIcon} />
        </div>
    )
}

ImageComp.propTypes = {
    deleteFile:PropTypes.func,
    file:PropTypes.object
}

UploadMedia.propTypes = {
    text:PropTypes.string,
    subText:PropTypes.string,
    selectedFilePlaceholder:PropTypes.string,
    getFiles:PropTypes.func,
    multiple:PropTypes.bool
}
export { UploadMedia};