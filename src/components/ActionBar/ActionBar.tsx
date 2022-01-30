import { BsMoonStarsFill, BsSunFill, BsSearch } from 'react-icons/bs'
import { VscCollapseAll } from 'react-icons/vsc'
import useDarkMode from '../../hooks/useDarkMode'

function ShortCut({ label }) {
    return (
        <span className='p-1 font-semibold transition-colors duration-300 rounded shadow-sm dark:bg-slate-400 dark:text-black bg-slate-300'>
            {label}
        </span>
    )
}

function QuickSearch() {
    return (
        <div className='flex px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full cursor-pointer dark:border-slate-500 dark:text-slate-500 hover:border-teal-500 dark:hover:border-teal-500'>
            <BsSearch className='relative block w-5 h-4 sm:hidden top-1.5 mr-4' />
            <span className='relative hidden mr-4 sm:block top-1 '>Search...</span>
            <ShortCut label={'Ctrl'} />
            <span className='relative px-1 top-1'>+</span>
            <ShortCut label={'B'} />
        </div>
    )
}

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
