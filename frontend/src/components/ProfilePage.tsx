import { useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardHeader } from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { User, useUserUpdate } from "../hook";
import { useToast } from "../hooks/use-toast"
import { ToastAction } from "../components/toast"
import { Toaster } from "../components/toaster"

export default function ProfilePage({ user }: { user: User }) {
    // State for profile fields
    const [usersname, setusersname] = useState(user.name || "Anonymous");
    const [email, setEmail] = useState(user.username);
    const [bio, setBio] = useState(user.biography);

    // State for toggling edit mode
    const [isEditing, setIsEditing] = useState(false);

    // State for password fields
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Validation errors state
    const [error, setError] = useState<string | null>(null);

    // Hook for user update
    const id = localStorage.getItem("id");
    const { updateUser } = useUserUpdate({ id: id || "" });

    // Toggle between view and edit mode
    const handleEditToggle = () => setIsEditing(!isEditing);

    const { toast } = useToast()

    // Save changes
    const handleSaveChanges = async () => {
        try {
            await updateUser({
                name: usersname,
                biography: bio,
                username: email,
            });
            setIsEditing(false);
            toast({
                description: "Profile updated successfully!",
                duration: 3000,
            })
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Failed to update the profile!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
                duration: 3000,
            })
        }
    };

    // Update password handler
    const handlePasswordSave = async () => {
        if (!newPassword || newPassword !== confirmPassword) {
            toast({
                description: "Password doesn't match",
                duration: 3000,
            })
            return;
        }

        try {
            await updateUser({ password: newPassword });
            toast({
                title: "Password Updated Successfully!",
                description: "Your password has been updated successfully",
                action: <ToastAction altText="OK">OK</ToastAction>,
                duration: 3000,
            })
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setError(null);
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Failed to update the password!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
                duration: 3000,
            })
        }
    };

    const getInitials = (name: string): string => {
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .toUpperCase();
    };

    const initials = getInitials(usersname);

    return (
        <div className="p-6 space-y-8 max-w-xl mx-auto">
            {/* Profile Header */}
            <header className="text-center space-y-4">
                <Avatar className="h-20 w-20 mx-auto">
                    <AvatarImage src="/avatars/01.png" alt="Profile picture" />
                    <AvatarFallback className="text-2xl font-semibold">{initials}</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl font-bold">{usersname}</h1>
            </header>

            {/* Profile Information */}
            <Card className="shadow-lg border border-gray-200">
                <CardHeader className="bg-gray-100 p-4">
                    <h2 className="text-xl font-semibold">Profile Details</h2>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    {!isEditing ? (
                        <div className="space-y-4">
                            <p>
                                <strong>Name:</strong> {usersname}
                            </p>
                            <p>
                                <strong>Email:</strong> {email}
                            </p>
                            <p>
                                <strong>Biography:</strong> {bio}
                            </p>
                            <Button
                                onClick={handleEditToggle}
                                className="bg-blue-600 text-white hover:bg-blue-700 transition-all"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4 p-4 border rounded-lg bg-white">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="E.g. Jane Doe"
                                    value={usersname}
                                    onChange={(e) => setusersname(e.target.value)}
                                    className="border-gray-300 focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="E.g. jane@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-gray-300 focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Biography</Label>
                                <Textarea
                                    id="bio"
                                    placeholder="Write something about yourself..."
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows={4}
                                    className="border-gray-300 focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex items-center space-x-4 pt-4">
                                <Button
                                    onClick={handleSaveChanges}
                                    className="bg-blue-600 text-white hover:bg-blue-700 transition-all"
                                >
                                    Save Changes
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={handleEditToggle}
                                    className="bg-gray-200 hover:bg-gray-300 transition-all"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Change Password */}
            <Card className="shadow-lg border border-gray-200">
                <CardHeader className="bg-gray-100 p-4">
                    <h2 className="text-xl font-semibold">Change Password</h2>
                    <p className="text-sm text-gray-600">
                        For your security, please do not share your password with others.
                    </p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                            type="password"
                            id="current-password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="border-gray-300 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border-gray-300 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border-gray-300 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    <Button
                        onClick={handlePasswordSave}
                        className="bg-green-600 text-white hover:bg-green-700 transition-all"
                    >
                        Update Password
                    </Button>
                    {error && <p className="text-red-600">{error}</p>}
                </CardContent>
            </Card>

            <Toaster />
        </div>
    );
}
