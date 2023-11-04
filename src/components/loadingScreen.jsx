const LoadingScreen = () => {
    return (
        <div id="loading-screen" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-xl backdrop-brightness-75 z-50">
            {/* Loader element or content */}
            <div className="text-white text-2xl">Loading.. please wait.</div>

            {/* <div className="ring">Loading<span></span></div> */}


        </div>
    );
};

export default LoadingScreen;
