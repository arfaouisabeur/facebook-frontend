import React from 'react';
import story1 from './image/profile.png';
import story2 from './image/story_2.jpg';
import story3 from './image/story_3.jpg';
import story4 from './image/story_4.png';
import story5 from './image/story_5.jpg';
import profile1 from './image/profile_1.jpg';
import profile2 from './image/profile_2.jpg';
import profile3 from './image/profile_3.jpg';
import profile4 from './image/profile_4.png';
import profile5 from './image/profile_5.png';
import profile6 from './image/profile_6.png';
import profile7 from './image/profile_7.png';
import profile8 from './image/profile_8.png';
import profile9 from './image/profile_9.png';
import post1 from './image/post_1.jpg';
import likeImg from './image/like.png';
import hahaImg from './image/haha.png';
import heartImg from './image/heart.png';
import liveVideoImg from './image/live_video.png';
import profileImg from './image/profile.png';
import uploadImg from './image/upload.png';

const RightSection = () => {
  const contacts = [
    { name: 'John Doe', image: profile1 },
    { name: 'Jane Smith', image: profile2 },
    { name: 'Michael Johnson', image: profile3 },
    { name: 'Emily Davis', image: profile4 },
    { name: 'David Wilson', image: profile5 },
    { name: 'Olivia Thompson', image: profile1 },
    { name: 'James Anderson', image: profile2 },
    { name: 'Sophia Martin', image: profile3 },
    { name: 'William Clark', image: profile4 },
    { name: 'Ava Rodriguez', image: profile5 },
    { name: 'Joseph Lewis', image: profile6 },
    { name: 'Isabella Hernandez', image: profile7 },
    { name: 'Daniel Lee', image: profile8 },
    { name: 'Mia White', image: profile9 },
    { name: 'Andrew Garcia', image: profile1 },
  ];

  return (
    <div className="right">
      <div className="first_warpper">
        <div className="page">
          <h2>Your Pages and profiles</h2>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="page_img">
          <img src={profileImg} alt="Page" />
          <p>Web Designer</p>
        </div>
        <div className="page_icon">
          <i className="fa-regular fa-bell"></i>
          <p>20 Notifications</p>
        </div>
        <div className="page_icon">
          <i className="fa-solid fa-bullhorn"></i>
          <p>Create promotion</p>
        </div>
      </div>
      <hr />
      <div className="second_warpper">
        <h2>Birthdays</h2>
        <div className="img_and_tag">
          <img src={story1} alt="Gift" />
          <p>
            <span>{contacts[0].name}</span> and <span>2 others</span> have birthdays today
          </p>
        </div>
      </div>
      <hr />
      <div className="third_warpper">
        <div className="contact_tag">
          <h2>Contacts</h2>
          <div className="contact_icon">
            <i className="fa-solid fa-video"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        {contacts.map((contact, index) => (
          <div className="contact" key={index}>
            <img src={contact.image} alt={`Contact ${index + 1}`} />
            <p>{contact.name}</p>
          </div>
        ))}
        <div className="contact">
          <img src={profile6} alt="Profile 6" />
          <p>{contacts[10].name}</p>
        </div>
        <div className="contact">
          <img src={profile7} alt="Profile 7" />
          <p>{contacts[11].name}</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
