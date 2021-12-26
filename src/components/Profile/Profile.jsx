import PropTypes from 'prop-types';
import { User } from "./User/User";
import { CardProfile } from './Profile.styled'

export const Profile = ({ user }) => {
    return (<CardProfile><User key={user.tag} user={user}/></CardProfile>)
}

Profile.protoTypes = {
    user: PropTypes.string.isRequired,
}