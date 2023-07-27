import NavBar from "../NavBar"
import "./style.css"

const Layout = ({
    nikeName,
    avatarUrl,
    id,
    children,
}) => {
    return (
        <div className="container">
            <NavBar nikeName={nikeName} avatarUrl={avatarUrl} id={id }/> 
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout