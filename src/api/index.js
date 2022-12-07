import axios from 'axios';

  const getFeeds = async () => {
    try {
      let result = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=pNmy9U6gsBhF9fzDEBdCRnJWrW0UAYDB&limit=25&rating=g');
      return result.data;
    } catch (e) {
      console.log('error', e);
    }
  };


  export {
    getFeeds
  }