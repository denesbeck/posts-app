import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { BiReset } from 'react-icons/bi'
import { useDarkMode, useQuickSearch } from '../../hooks'
import { QuickSearch, Search } from '..'
import { useState, useContext } from 'react'
import GlobalContext from '../../contexts/globalContext'

function ActionBar() {
    const globalContext = useContext(GlobalContext)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const { isDark, toggleTheme } = useDarkMode()

    useQuickSearch(setIsSearchVisible)

    return (
        <>
            {isSearchVisible ? <Search isVisible={isSearchVisible} setIsVisible={setIsSearchVisible} /> : null}

            <div className='flex pt-2 space-x-6 animate-textFocusIn'>
                <QuickSearch setIsSearchVisible={setIsSearchVisible} />
                <div className='ml-auto'></div>
                <BiReset
                    onClick={() => globalContext.dispatch({ type: 'SEARCH_STRING', value: '' })}
                    className={`${
                        globalContext.state.searchString.length ? 'w-6' : 'w-0'
                    } relative transition-all duration-300 h-6 cursor-pointer top-2.5 dark:text-gray-200 dark:hover:text-teal-500 hover:text-teal-500`}
                />
                <div onClick={toggleTheme} className='relative cursor-pointer top-2.5'>
                    {isDark ? (
                        <BsMoonStarsFill className='w-5 h-5 transition-all duration-300 dark:text-gray-200 dark:hover:text-teal-500 hover:text-teal-500' />
                    ) : (
                        <BsSunFill className='w-5 h-5 transition-all duration-300 dark:text-gray-200 dark:hover:text-teal-500 hover:text-teal-500' />
                    )}
                </div>
            </div>
        </>
    )
}

export default ActionBar
