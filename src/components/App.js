import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { vedios: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('buildings');
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxresult: 5,
        key: 'AIzaSyBpMvCpG_hMNntvzCMh_gLGoB7p_19MJFs',
        q: term
      }
    });

    this.setState({ 
      vedios: response.data.items,
      selectedVideo: response.data.items[0]
    });

  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.vedios} />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;