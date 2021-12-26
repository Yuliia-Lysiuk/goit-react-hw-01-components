import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { BsFillHeartFill, BsFillEyeFill, BsFillPeopleFill, BsAt } from "react-icons/bs";
import { Avatar, Name, Description, Information, StatsList, Stats, Quantity } from './User.styled';

export const User = ({ user: { username, tag, location, avatar, stats } }) => {
    return (<div >
  
    <Avatar
      src={avatar}
      alt="User avatar"
            />
        <Description >
            
            <Name >
                < FaUserAlt/>
                {username}</Name>
            <Information>
               <BsAt/> 
                {tag}</Information>
            <Information>
                <FaMapMarkerAlt/>
                {location}</Information>
  </Description>

  <Stats>
    <StatsList>
                <span >
                    <BsFillPeopleFill/>
                    Followers</span>
                <Quantity>
                   
                    {stats.followers}</Quantity>
    </StatsList>
    <StatsList>
                <span >
                   <BsFillEyeFill/> 
                    Views</span>
      <Quantity>{ stats.views}</Quantity>
    </StatsList>
    <StatsList>
                <span >
                    <BsFillHeartFill/>
                    Likes</span>
                <Quantity>
                    
                    {stats.likes}</Quantity>
    </StatsList>
  </Stats>
</div>)
}

User.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};