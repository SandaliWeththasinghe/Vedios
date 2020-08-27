import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { vedios: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxresult: 5,
        key: 'AIzaSyBpMvCpG_hMNntvzCMh_gLGoB7p_19MJFs',
        q: term
      }
    });

    this.setState({ vedios: response.data.items });

  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.vedios} />
      </div>
    );
  }
}

export default App;