import React from "react";
import { UploadMedia } from "../components/UploadMedia";

export default {
  title: "UploadMedia",
  component: UploadMedia,
};

const Template = (args) => <UploadMedia {...args} />;


export const MultipleFiles = Template.bind({});

MultipleFiles.args = {
  text:"Drag and drop files ",
  subText:"File size should be less then 5 MB ",
  multiple:true,
  getFiles:(files)=>{
    // You can iterate through files array and upload images one by one
    console.log(files)
  }
};

export const SingleFile = Template.bind({});

SingleFile.args = {
  text:"Upload Single photo",
  subText:"File size should be less then 5 MB",
  multiple:false,
  getFiles:(files)=>{
    // You can iterate through files array and upload images one by one
    console.log(files)
  }
};



