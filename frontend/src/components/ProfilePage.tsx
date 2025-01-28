import { useState } from "react"
import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Label } from "@/components/label"
import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { type User, useUserUpdate } from "../hook"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Lock, UserIcon, Mail, Edit2, Check, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Separator } from "@/components/separator"
import { Appbar } from "./Appbar"

export default function ProfilePage({ user }: { user: User }) {
    const [username, setUsername] = useState(user.name || "Anonymous")
    const [email, setEmail] = useState(user.username)
    const [bio, setBio] = useState(user.biography || "No bio provided")
    const [isEditing, setIsEditing] = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const id = localStorage.getItem("id")
    const { updateUser } = useUserUpdate({ id: id || "" })

    const handleEditToggle = () => setIsEditing(!isEditing)

    const handleSaveChanges = async () => {
        try {
            await updateUser({
                name: username,
                biography: bio,
                username: email,
            })
            setIsEditing(false)
            toast.success("Profile updated successfully!")
        } catch (e) {
            toast.error("Uh oh! Something went wrong.")
        }
    }

    const handlePasswordSave = async () => {
        if (!newPassword || newPassword !== confirmPassword) {
            toast.error("Password doesn't match")
            return
        }

        try {
            await updateUser({ password: newPassword })
            toast.success("Password Updated Successfully!")
            setCurrentPassword("")
            setNewPassword("")
            setConfirmPassword("")
            setError(null)
        } catch (e) {
            toast.error("Uh oh! Something went wrong.")
        }
    }

    const getInitials = (name: string): string => {
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .toUpperCase()
    }

    const initials = getInitials(username)

    return (
        <div>
            <Appbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <Card className="border-none shadow-xl bg-white dark:bg-gray-800 overflow-hidden">
                        <div className="h-24 "></div>
                        <CardContent className="relative pt-0 px-6 pb-6">
                            <div className="flex items-center justify-center sm:justify-start space-x-6 sm:space-x-8 -mt-16">
                                <div className="relative group z-10">
                                    <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                                        <AvatarImage src="/avatars/01.png" alt="Profile picture" />
                                        <AvatarFallback className="text-3xl sm:text-4xl font-semibold bg-gray-100 text-gray-600">
                                            {initials}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="text-left space-y-2 flex-1 pt-4 sm:pt-0">
                                    <h1 className="text-2xl sm:text-3xl font-bold">{username}</h1>
                                    <p className="text-gray-500 dark:text-gray-400 flex items-center">
                                        <Mail className="h-4 w-4 mr-2" />
                                        {email}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="profile" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="profile" className="text-sm sm:text-base">
                                Profile
                            </TabsTrigger>
                            <TabsTrigger value="security" className="text-sm sm:text-base">
                                Security
                            </TabsTrigger>
                        </TabsList>
                        <AnimatePresence mode="wait">
                            <TabsContent value="profile">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card>
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl sm:text-2xl font-semibold flex items-center justify-between">
                                                <span className="flex items-center">
                                                    <UserIcon className="mr-2 h-5 w-5" />
                                                    Profile Information
                                                </span>
                                                {!isEditing && (
                                                    <Button variant="ghost" size="sm" onClick={handleEditToggle}>
                                                        <Edit2 className="h-4 w-4 mr-2" />
                                                        Edit
                                                    </Button>
                                                )}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {!isEditing ? (
                                                    <>
                                                        <div>
                                                            <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</Label>
                                                            <p className="mt-1 text-lg font-medium">{username}</p>
                                                        </div>
                                                        <Separator />
                                                        <div>
                                                            <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</Label>
                                                            <p className="mt-1 text-lg font-medium">{email}</p>
                                                        </div>
                                                        <Separator />
                                                        <div>
                                                            <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Biography</Label>
                                                            <p className="mt-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                                                                {bio}
                                                            </p>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="name">Name</Label>
                                                            <Input
                                                                id="name"
                                                                placeholder="Your name"
                                                                value={username}
                                                                onChange={(e) => setUsername(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="email">Email</Label>
                                                            <Input
                                                                id="email"
                                                                type="email"
                                                                placeholder="Your email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="bio">Biography</Label>
                                                            <Textarea
                                                                id="bio"
                                                                placeholder="Write something about yourself..."
                                                                value={bio}
                                                                onChange={(e) => setBio(e.target.value)}
                                                                rows={3}
                                                                className="resize-none"
                                                            />
                                                        </div>
                                                        <div className="flex items-center space-x-4 pt-2">
                                                            <Button onClick={handleSaveChanges} className="w-full sm:w-auto">
                                                                <Check className="h-4 w-4 mr-2" />
                                                                Save Changes
                                                            </Button>
                                                            <Button variant="outline" onClick={handleEditToggle} className="w-full sm:w-auto">
                                                                <X className="h-4 w-4 mr-2" />
                                                                Cancel
                                                            </Button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="security">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card>
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-2xl font-semibold flex items-center">
                                                <Lock className="mr-2 h-5 w-5" />
                                                Change Password
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="current-password">Current Password</Label>
                                                    <Input
                                                        type="password"
                                                        id="current-password"
                                                        value={currentPassword}
                                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="new-password">New Password</Label>
                                                    <Input
                                                        type="password"
                                                        id="new-password"
                                                        value={newPassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                                    <Input
                                                        type="password"
                                                        id="confirm-password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </div>
                                                <Button onClick={handlePasswordSave} className="w-full mt-2">
                                                    <Lock className="h-4 w-4 mr-2" />
                                                    Update Password
                                                </Button>
                                                {error && <p className="text-red-600 mt-2">{error}</p>}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        </AnimatePresence>
                    </Tabs>
                </motion.div>

                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </div>
    )
}
