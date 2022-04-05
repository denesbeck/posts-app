function Header() {
    return (
        <div className='animate-[textFocusIn_1s_ease-in-out] text-2xl font-bold text-slate-800 dark:text-slate-200 sm:text-3xl lg:text-4xl'>
            <p>Posts App</p>
            <p className='text-lg'>
                based on
                <span className='text-blue-400'>{' {JSON} '}</span> Placeholder's Posts Resource
            </p>
        </div>
    )
}

export default Header
