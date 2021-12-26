import { FriendItem } from "../FriendItem/FriendItem";
import { FriendItems } from "./FriendList.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    
    return (<ul>
        {friends.map(friend => (
            <FriendItems  key={friend.id} >
                <FriendItem
                    name={friend.name}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                />
            </FriendItems >
        ))}
    </ul>)
}
 FriendList.propTypes = {
 
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};
