import UseBage from "../UserBage"
import "./style.css"
const NavBar = ({
    nikeName,
    avatarUrl,
    id, 
}) => {
    return (
        <div>
            <div>logo</div>
            <UseBage nikeName={nikeName} avatarUrl={avatarUrl} id={id }/>
        </div>
    )
}

export default NavBar