import { createPortal } from 'react-dom'

function Loading() {
    return createPortal(
        <div className='fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 space-x-4'>
                <div className='relative top-9 h-4 w-4 animate-[jumpingDots_1.2s_infinite] rounded-full bg-slate-800'></div>
                <div className='relative top-9 h-4 w-4 animate-[jumpingDots_1.2s_0.4s_infinite] rounded-full bg-teal-500'></div>
                <div className='relative top-9 h-4 w-4 animate-[jumpingDots_1.2s_0.8s_infinite] rounded-full bg-slate-200'></div>
            </div>
        </div>,
        document.getElementById('root')
    )
}

export default Loading
