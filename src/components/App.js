import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        part: 'snippet',
        maxresult: 5,
        key: 'AIzaSyBpMvCpG_hMNntvzCMh_gLGoB7p_19MJFs',
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;