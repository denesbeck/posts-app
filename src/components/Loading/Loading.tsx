function Loading() {
    return (
        <div className='fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden bg-gray-900 bg-opacity-80'>
            <div className='fixed flex space-x-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <div className='relative w-4 h-4 rounded-full bg-slate-800 top-9 animate-[jumpingDots_1.2s_infinite]'></div>
                <div className='relative w-4 h-4 bg-teal-500 rounded-full top-9 animate-[jumpingDots_1.2s_0.4s_infinite]'></div>
                <div className='relative w-4 h-4 rounded-full bg-slate-200 top-9 animate-[jumpingDots_1.2s_0.8s_infinite]'></div>
            </div>
        </div>
    )
}

export default Loading
