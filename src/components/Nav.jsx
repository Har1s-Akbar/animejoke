function Nav(){
    return(
        <nav class="bg-blue-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-center h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 justify-self-start px-4">
                        <h1 className="text-3xl text-teal-400 item-start">AnimeJonks</h1>
                    </div>
                    <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4 ">
                        <a href="#" class="text-gray-300 ease-in-out duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" class="text-gray-300 ease-in-out duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" class="text-gray-300 ease-in-out duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#" class="text-gray-300 ease-in-out duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
};
export default Nav;