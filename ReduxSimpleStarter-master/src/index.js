import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import _ from "lodash";

const API_KEY = "AIzaSyDMTJXlWxTpsBn0_HmBPecVPMu2Rx6qBrI";

// Creat a new React component
// This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Eyes on fire");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it in the DOM (display on the page)
ReactDOM.render(<App />, document.querySelector(".container-fluid"));
