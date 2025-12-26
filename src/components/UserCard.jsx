import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed }from "../utils/feedSlice";


const UserCard = (user) => {
  const dispatch = useDispatch();

  const handleSendRequest = async(status, userId) => {
    try{
      const res = await axios.post(BASE_URL + '/request/send/' + status + '/' + userId, {}, {
        withCredentials: true,
      });

        console.log(res);
      dispatch(removeUserFromFeed(userId));
    } catch(err) {
      console.error(err);
    }
  }


    const { _id, firstName, lastName, photoURL, age, gender, about } = user.user || {};
  return (
    <div className="card bg-base-300 w-96 shadow-sm my-4">
      <figure>
        <img
          src={photoURL || "https://www.vhv.rs/dpng/d/256-2569650_men-profile-icon-png-image-free-download-searchpng.png"}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        { age && gender && <p>{age} years old, {gender}</p>}
        { about && <p>{about}</p>}
        <div className="card-actions justify-between">
          <button className="btn btn-primary" onClick={() => handleSendRequest('ignored', _id)}>Ignore</button>
          <button className="btn btn-secondary" onClick={() => handleSendRequest('interested', _id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
