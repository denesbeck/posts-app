import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { VscCollapseAll } from 'react-icons/vsc'
import useDarkMode from '../../hooks/useDarkMode'
import { QuickSearch } from '..'

function ActionBar() {
    const { isDark, toggleTheme } = useDarkMode()
    return (
        <div className='flex pt-4 space-x-6 animate-textFocusIn'>
            <QuickSearch />
            <VscCollapseAll className='relative transition-colors duration-300 w-6 h-6 cursor-pointer top-2.5 dark:text-gray-200 dark:hover:text-teal-500 hover:text-teal-500' />
            <div onClick={toggleTheme} className='relative cursor-pointer top-2.5'>
                {isDark ? (
                    <BsMoonStarsFill className='w-5 h-5 transition-all duration-300 dark:text-gray-200 dark:hover:text-teal-500 hover:text-teal-500' />
                ) : (
                    <BsSunFill className='w-5 h-5 transition-all duration-300 dark:text-gray-200 dark:hover:text-teal-500 hover:text-teal-500' />
                )}
            </div>
        </div>
    )
}

export default ActionBar
