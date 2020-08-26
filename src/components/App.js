import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { vedios: [] };

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

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.vedios.length} videos
      </div>
    );
  }
}

export default App;