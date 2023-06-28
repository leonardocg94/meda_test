/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {GetPostResponse} from '../../../types/servicesTypes';
import {getPostService} from '../../../services/postServices';

export const usePostList = () => {
  const [posts, setPosts] = useState<GetPostResponse>([]);

  useEffect(() => {
    (async () => {
      const data = await getPostService();
      if (data) setPosts(data);
    })();
  }, []);

  return {posts} as const;
};
