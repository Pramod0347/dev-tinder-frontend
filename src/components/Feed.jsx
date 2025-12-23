import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
import axios from 'axios';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (feed) return;

    const fetchFeed = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
        dispatch(addFeed(res.data.data));
        console.log(res);
      } catch (err) {
        console.log('Error while fetching feed', err);
      }
    };

    fetchFeed();
  }, [feed, dispatch]);

  return (
    feed && (
      <div className='flex justify-center items-center'>
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
