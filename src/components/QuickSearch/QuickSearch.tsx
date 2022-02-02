import { BsSearch } from 'react-icons/bs'
import { ShortCut } from '..'

function QuickSearch({ setIsSearchVisible }) {
    return (
        <button
            onClick={() => setIsSearchVisible((prevState: boolean) => !prevState)}
            className='flex px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full cursor-pointer max-h-12 dark:border-slate-500 dark:text-slate-500 hover:border-teal-500 dark:hover:border-teal-500'
        >
            <BsSearch className='relative block w-5 h-4 sm:hidden top-1.5 mr-4' />
            <span className='relative hidden mr-4 sm:block top-1 '>Search...</span>
            <ShortCut label={'Ctrl'} />
            <span className='relative px-1 top-1'>+</span>
            <ShortCut label={'B'} />
        </button>
    )
}

export default QuickSearch
