const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <p className="ml-4 text-blue-500 font-medium">Loading...</p>
        </div>
    );
};

export default Loading;
