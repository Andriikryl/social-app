import { useNavigate } from "react-router-dom";
import "./style.css"
const UseBage = ({
  nikeName,
  avatarUrl,
  id,
}) => {
  const  navigate = useNavigate()
  const onUserBageClick = () => {
    navigate(`/${id}`)
  }
  return <div onClick={onUserBageClick}>
    {avatarUrl ? <img src={avatarUrl} alt="avatar"/> : <div>logo-avatar</div>}
    <span>{nikeName}</span>
  </div>;
};

export default UseBage;
