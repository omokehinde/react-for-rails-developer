import React from "react";
import PropTypes from "prop-types";

const Video = () => {
  return (
    <div className='pt-4 pb-4'>
      <iframe width='100%' height='400' src='https://www.youtube.com/embed/B0SxxHAImhc' frameBorder='0' allow='accelerometer; autoplay; encripted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
    </div>
  )
}

export default Video;
