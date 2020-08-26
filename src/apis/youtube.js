import axios from 'axios';

// const KEY = 'AIzaSyBpMvCpG_hMNntvzCMh_gLGoB7p_19MJFs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  // params: {
  //   part: 'snippet',
  //   maxresult: 5,
  //   key: KEY
  // }
});