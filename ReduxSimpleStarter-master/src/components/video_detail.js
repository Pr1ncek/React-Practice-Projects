import React, { Component } from "react";

const videoDetail = ({ video }) => {
  if (!video) return <div>Loading ...</div>;

  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="card col-lg-8 p-0 float-left">
      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details card-body">
          <h3 className="card-title">{video.snippet.title}</h3>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default videoDetail;
