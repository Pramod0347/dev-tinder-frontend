import React from "react";

const UserCard = (user) => {

    console.log(user);
    const { firstName, lastName, photoURL, age, gender, about } = user.user || {};
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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
