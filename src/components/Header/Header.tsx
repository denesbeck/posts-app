function Header() {
    return (
        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold animate-[textFocusIn_1s_ease-in-out] text-slate-800 dark:text-slate-200'>
            <p>Posts App</p>
            <p className='text-lg'>
                based on
                <span className='text-blue-400'>{' {JSON} '}</span> Placeholder's Posts Resource
            </p>
        </div>
    )
}

export default Header
