import React, { useState } from "react";
import styled from "styled-components";
import { videos } from "../_Data";

const Container = styled.div`
  height: 55vh;
  margin: 0 1.5rem;
`;

const VideoContainer = styled.div`
  height: 50vh;
  width: 100%;
`;

const Video = styled.video`
  object-fit: cover;
`;

const SquaresContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Square = styled.div`
  height: 10px;
  width: 10px;
  background-color: black;
  margin: 0 5px 2px 5px;
  color: ${(props) => (props.slideIndex === 0 ? "#b38cd8" : "#333533")};
  filter: ${(props) =>
    props.currentIndex === props.slideIndex
      ? "brightness(3)"
      : "brightness(2)"};
  cursor: pointer;
  opacity: 0.4;
`;

function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <Container>
      <VideoContainer>
        <Video
          height="100%"
          width="100%"
          src={videos[0].url}
          type="video/mp4"
          preload="auto"
          playsInline
          muted
          loop
          autoPlay
        />
      </VideoContainer>
      <SquaresContainer>
        {videos.map((video, slideIndex = 0) => (
          <Square
            key={video.id}
            slideIndex={slideIndex}
            currentIndex={currentIndex}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </SquaresContainer>
    </Container>
  );
}

export default VideoSlider;
