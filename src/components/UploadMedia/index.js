import React from "react";
import PropTypes from "prop-types";
import SelectFile from "./SelectFile";
import { DragAndDrop } from "./DragAndDrop";

function UploadMedia({
  multiple = false,
  getFiles,
  style,
  PlaceHolderComponent,
  draging = false,
}) {
  if (draging && multiple) {
    return <DragAndDrop style={style} getFiles={getFiles} />;
  }
  return (
    <SelectFile
      PlaceHolderComponent={PlaceHolderComponent}
      style={style}
      getFiles={getFiles}
      multiple={multiple}
    />
  );
}

UploadMedia.propTypes = {
  getFiles: PropTypes.func,
  multiple: PropTypes.bool,
  draging: PropTypes.bool,
};
export { UploadMedia };
