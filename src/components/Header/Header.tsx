function Header() {
    return (
        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold pt-4 animate-[textFocusIn_1s_ease-in-out] dark:text-gray-200'>
            <span>Posts App based on</span>
            <span className='text-blue-400'>{' {JSON}'}</span> <span>Placeholder's Posts Resource</span>
        </div>
    )
}

export default Header
