import ToggleButton from '@material-ui/lab/ToggleButton';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import './profile.css'
import { useDispatch, useSelector } from 'react-redux';
import {profileActions} from '../../store/actions'

export const Profile = () => {
  const toggle = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const changeAvatar = () => {
    dispatch(profileActions(!toggle));
  }

  return (
    <div className="profile">
      {toggle
        ? <img src="https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png" alt="avatar"></img>
        : <img src="https://coopdesis.com.do/assets/img/avatar-woman.png" alt="avatar"></img>}
      <ToggleButton
      value="check"
      selected={toggle}
      onChange={changeAvatar}
      >{`Change gender -- ${toggle ? 'woman' : 'man'}`}
        {' '}<DoneOutlineIcon />
      </ToggleButton>
    </div>
  )
}