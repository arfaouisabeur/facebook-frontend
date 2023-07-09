import React from 'react';
import profileImage from './image/profile.png';
import friendImage from './image/friend.png';
import savedImage from './image/saved.png';
import groupImage from './image/group.png';
import marketplaceImage from './image/marketplace.png';
import watchImage from './image/watch.png';
import downArrowImage from './image/down_arrow.png';
import shortcuts1Image from './image/shortcuts_1.png';
import shortcuts2Image from './image/shortcuts_2.jpeg';
import shortcuts3Image from './image/shortcuts_3.webp';
import shortcuts4Image from './image/shortcuts_4.png';
import shortcuts5Image from './image/shortcuts_5.webp';

const LeftSection = () => {
  return (
    <div className="left">
      <div className="img">
        <img src={profileImage} alt="Profile" />
        <p>Saber Arfaoui</p>
      </div>
      <div className="img">
        <img src={friendImage} alt="Friends" />
        <p>Friends</p>
      </div>
      <div className="img">
        <img src={savedImage} alt="Saved" />
        <p>Saved</p>
      </div>
      <div className="img">
        <img src={groupImage} alt="Groups" />
        <p>Groups</p>
      </div>
      <div className="img">
        <img src={marketplaceImage} alt="Marketplace" />
        <p>Marketplace</p>
      </div>
      <div className="img">
        <img src={watchImage} alt="Watch" />
        <p>Watch</p>
      </div>
      <div className="img">
        <img src={downArrowImage} alt="See more" />
        <p>See more</p>
      </div>
      <hr />
      <h2>Your shortcuts</h2>
      <p className="edit">Edit</p>
      <div className="shortcuts">
        <img src={shortcuts1Image} alt="Mobile Games" />
        <p>MOBILE GAMES</p>
      </div>
      <div className="shortcuts">
        <img src={shortcuts2Image} alt="Online Education" />
        <p>Online Education</p>
      </div>
      <div className="shortcuts">
        <img src={shortcuts3Image} alt="Food Lovers" />
        <p>Food Lovers</p>
      </div>
      <div className="shortcuts">
        <img src={shortcuts4Image} alt="Social Media Academy" />
        <p>Social Media Academy</p>
      </div>
      <div className="shortcuts">
        <img src={shortcuts5Image} alt="PC Shop" />
        <p>PC Shop</p>
      </div>
      <div className="shortcuts">
        <img src={downArrowImage} alt="See more" />
        <p>See more</p>
      </div>
    </div>
  );
};

export default LeftSection;
