import { useState, useEffect } from 'react';

import * as youtube from '../apis/youtube';

const useVideos = (defaultSearchterm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchterm);
  }, []);

  const search = async (term) => {
    const response = await fetch(
      `${youtube.baseURL}/search?q=${term}&part=${youtube.part}&maxResults=${youtube.maxResults}&key=${youtube.KEY}`
    );

    const data = await response.json();
    setVideos(data.items);
  };

  return [videos, search];
};

export default useVideos;
