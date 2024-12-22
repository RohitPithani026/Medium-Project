import { useParams } from "react-router-dom"; 
import ProfilePage from "../pages/ProfilePage"; 
import { useUser } from "../hooks"; 

export default function User() {
    const { id } = useParams();
    const { user } = useUser({ id: id || "" }); 

    if (!user) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <ProfilePage user={user} />
        </div>
    );
}