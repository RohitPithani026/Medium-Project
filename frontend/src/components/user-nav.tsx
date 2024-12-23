import { Link } from "react-router-dom";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { useUser } from "../hook";

export default function UserNav() {
    const id = localStorage.getItem("id");
    const { user } = useUser({ id: id || "" });

    if(!user) {
        return;
    }

    const getInitials = (name: string): string => {
        return name
            .split(" ") 
            .map((part) => part[0]) 
            .join("") 
            .toUpperCase(); 
    };

    const initials = user.name ? getInitials(user.name) : "A";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                        <p className="text-base font-medium leading-none">{user.name}</p>
                        <p className="text-sm leading-none text-muted-foreground">{user.username}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link to={`/profile/${id}`}>Profile</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}


