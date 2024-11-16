
export const ProfileCard = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
                    {/* Profile Image */}
                    <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Profile Image" />
                    
                    {/* {<!-- Profile Details -->} */}
                    <div className="p-6">
                        <div className="flex items-center">
                            <img className="w-16 h-16 rounded-full border-2 border-blue-500" src="https://via.placeholder.com/150" alt="Avatar" />
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
                                <p className="text-gray-600">@johndoe</p>
                            </div>
                        </div>
                    
                    {/* {<!-- Bio -->} */}
                    <p className="mt-4 text-gray-600">
                        Software Engineer | Full-stack Developer | Tech Enthusiast. Passionate about building interactive and scalable applications.
                    </p>
                    
                    {/* {<!-- Stats -->} */}
                    <div className="mt-6 flex justify-between text-center">
                        <div>
                            <p className="text-gray-800 text-xl font-bold">150</p>
                            <p className="text-gray-500">Posts</p>
                        </div>
                        <div>
                            <p className="text-gray-800 text-xl font-bold">1.2k</p>
                            <p className="text-gray-500">Followers</p>
                        </div>
                        <div>
                            <p className="text-gray-800 text-xl font-bold">200</p>
                            <p className="text-gray-500">Following</p>
                        </div>
                    </div>
                    
                    {/* {<!-- Follow Button -->} */}
                    <div className="mt-6">
                        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                        Follow
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};


