import { useParams } from "react-router-dom"; 
import ProfilePage from "./ProfilePage"; 
import { useUser } from "../hook"; 
import { ProfilePageSkeleton } from "./ProfileSkeleton";

export default function User() {
    const { id } = useParams();
    const { user } = useUser({ id: id || "" }); 

    if (!user) {
        return <ProfilePageSkeleton />; 
    }

    return (
        <div>
            <ProfilePage user={user} />
        </div>
    );
}