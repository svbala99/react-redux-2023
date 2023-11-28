import React from "react";
import API_URLS from "../../constants/apiConstants";

const Calender = () => {
  const dateString = `2023/27112023`;

  return (
    <div>
      <img src={`${API_URLS.CALENDER}/${dateString}.jpg`} alt="Calendar img" />
    </div>
  );
};

export default Calender;
