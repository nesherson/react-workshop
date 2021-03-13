import './App.css';
import React from 'react';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };

    this.handleVideo = this.handleVideo.bind(this);
  }

  handleVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo],
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu onClick={this.handleVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;
