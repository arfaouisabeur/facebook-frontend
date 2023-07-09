import React from 'react';
import story1Image from './image/profile.png';
import uploadImage from './image/upload.png';
import story2Image from './image/story_2.jpg';
import profile1Image from './image/profile_1.jpg';
import story3Image from './image/story_3.jpg';
import profile2Image from './image/profile_2.jpg';
import story4Image from './image/story_4.png';
import profile3Image from './image/profile_3.jpg';
import story5Image from './image/story_5.jpg';
import profile4Image from './image/profile_4.png';
import profile5Image from './image/profile_5.png';
import profile6Image from './image/profile_6.png';
import profile7Image from './image/profile_7.png';
import liveVideoImage from './image/live_video.png';
import profile9Image from './image/profile_9.png';
import post1Image from './image/post_1.jpg';
import profile10Image from './image/profile_10.png';
import post2Image from './image/post_2.jpg';
import profile11Image from './image/profile_11.png';
import post3Image from './image/post_3.png';
import profile12Image from './image/profile_12.jpg';
import post5Image from './image/post_5.jpg';
import profileImage from './image/profile.png';
import likeImage from './image/like.png';
import hahaImage from './image/haha.png';
import heartImage from './image/heart.png';
import { RiLiveFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
const CenterSection = () => {
  return (
    <div className="center">
      <div className="top_box">
        <div className="my_story_card">
          <img src={story1Image} alt="My Story" />
          <div className="story_upload">
            <img src={uploadImage} alt="Upload" />
            <p className="story_tag">Create story</p>
          </div>
        </div>
        <div className="story_card">
          <img src={story2Image} alt="Story 2" />
          <div className="story_profile">
            <img src={profile1Image} alt="Profile 1" />
            <div className="cricle"></div>
          </div>
          <div className="story_name">
            <p className="name">Charith Disanayaka</p>
          </div>
        </div>
        
        <div className="story_card">
          <img src={story3Image} alt="Story 3" />
          <div className="story_profile">
            <img src={profile2Image} alt="Profile 2" />
            <div className="cricle"></div>
          </div>
          <div className="story_name">
            <p className="name">Minidu Thiranjana</p>
          </div>
        </div>
        <div className="story_card">
          <img src={story4Image} alt="Story 4" />
          <div className="story_profile">
            <img src={profile3Image} alt="Profile 3" />
            <div className="cricle"></div>
          </div>
          <div className="story_name">
            <p className="name">Kavisha Vidurangi</p>
          </div>
        </div>
        <div className="story_card">
          <img src={story5Image} alt="Story 5" />
          <div className="story_profile">
            <img src={profile4Image} alt="Profile 4" />
            <div className="cricle"></div>
          </div>
          <div className="story_name">
            <p className="name">Kavindu Akalanka</p>
          </div>
        </div>
      </div>
      <div className="my_post">
        <div className="post_top">
          <img src={profileImage} alt="Profile" />
          <input type="text" placeholder="What's on your mind, John?" />
        </div>
        <hr />
        <div className="post_bottom">
          <div className="post_icon">
          <RiLiveFill  className='em' />
            <p>Live video</p>
          </div>
          <div className="post_icon" >
            <FaPhotoVideo  className='em' />
            <p>Photo/video</p>
          </div>
          <div className="post_icon">
          <BsFillEmojiHeartEyesFill  className='em' />
            <p>Feeling/activity</p>
          </div>
        </div>
      </div>
      <div className="room">
        <div className="room_image">
          <img src={liveVideoImage} alt="Live Video" />
          <p className="room_tag">Create room</p>
        </div>
        <div className="room_profile">
          <img src={profile1Image} alt="Profile 1" />
          <img src={profile2Image} alt="Profile 2" />
          <img src={profile3Image} alt="Profile 3" />
          <img src={profile4Image} alt="Profile 4" />
          <img src={profile5Image} alt="Profile 5" />
          <img src={profile6Image} alt="Profile 6" />
          <img src={profile7Image} alt="Profile 7" />
          <img src={profile9Image} alt="Profile 9" />
        </div>
      </div>
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={post1Image} alt="Post 1" />
            <div className="friends_name">
              <p className="friends_name">Senuda De Silva</p>
              <p className="time">16h.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={post1Image} alt="Post 1" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImage} alt="Like" />
            <img src={hahaImage} alt="Haha" />
            <img src={heartImage} alt="Heart" />
            <p>You, Charith Disanayaka and 25K others</p>
          </div>
          <div className="comment">
            <p>421 Comments</p>
            <p>1.3K Shares</p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i className="fa-solid fa-thumbs-up activi"></i>
            <p>Like</p>
          </div>
          <div className="like_icon">
            <i className="fa-solid fa-message"></i>
            <p>Comments</p>
          </div>
          <div className="like_icon">
            <i className="fa-solid fa-share"></i>
            <p>Share</p>
          </div>
        </div>
        <hr />
        <div className="comment_warpper">
          <img src={profileImage} alt="Profile" />
          <div className="circle"></div>
          <div className="comment_search">
            <input type="text" placeholder="Write a comment" />
            <i className="fa-regular fa-face-smile"></i>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-regular fa-note-sticky"></i>
          </div>
        </div>
      </div>
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={profile10Image} alt="Profile 10" />
            <div className="friends_name">
              <p className="friends_name">Senuda De Silva</p>
              <p className="time">16h.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={post2Image} alt="Post 2" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImage} alt="Like" />
            <img src={hahaImage} alt="Haha" />
            <img src={heartImage} alt="Heart" />
            <p>You, Charith Disanayaka and 25K others</p>
          </div>
          <div className="comment">
            <p>421 Comments</p>
            <p>1.3K Shares</p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i className="fa-solid fa-thumbs-up activi"></i>
            <p>Like</p>
          </div>
          <div className="like_icon">
            <i className="fa-solid fa-message"></i>
            <p>Comments</p>
          </div>
          <div className="like_icon">
            <i className="fa-solid fa-share"></i>
            <p>Share</p>
          </div>
        </div>
        <hr />
        <div className="comment_warpper">
          <img src={profileImage} alt="Profile" />
          <div className="circle"></div>
          <div className="comment_search">
            <input type="text" placeholder="Write a comment" />
            <i className="fa-regular fa-face-smile"></i>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-regular fa-note-sticky"></i>
          </div>
        </div>
      </div>
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={profile11Image} alt="Profile 11" />
            <div className="friends_name">
              <p className="friends_name">Senuda De Silva</p>
              <p className="time">16h.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={post3Image} alt="Post 3" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImage} alt="Like" />
            <img src={hahaImage} alt="Haha" />
            <img src={heartImage} alt="Heart" />
            <p>You, Charith Disanayaka and 25K others</p>
          </div>
          <div className="comment">
            <p>421 Comments</p>
            <p>1.3K Shares</p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i className="fa-solid fa-thumbs-up activi"></i>
            <p>Like</p>
          </div>
          <div className="like_icon">
            <i className="fa-solid fa-message"></i>
            <p>Comments</p>
          </div>
          <div className="like_icon">
            <i className="fa-solid fa-share"></i>
            <p>Share</p>
          </div>
        </div>
        <hr />
        <div className="comment_warpper">
          <img src={profileImage} alt="Profile" />
          <div className="circle"></div>
          <div className="comment_search">
            <input type="text" placeholder="Write a comment" />
            <i className="fa-regular fa-face-smile"></i>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-regular fa-note-sticky"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
