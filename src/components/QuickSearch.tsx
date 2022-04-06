import { BsSearch } from 'react-icons/bs'
import { ShortCut } from 'components'

function QuickSearch({ setIsSearchVisible }) {
    return (
        <button
            onClick={() => setIsSearchVisible((prevState: boolean) => !prevState)}
            className='flex max-h-12 cursor-pointer rounded-full border-2 px-6 py-2 text-sm transition-colors duration-300 hover:border-teal-500 dark:border-slate-500 dark:text-slate-500 dark:hover:border-teal-500'
        >
            <BsSearch className='relative top-1.5 mr-4 block h-4 w-5 sm:hidden' />
            <span className='relative top-1 mr-4 hidden sm:block '>Search...</span>
            <ShortCut label={'Ctrl'} />
            <span className='relative top-1 px-1'>+</span>
            <ShortCut label={'B'} />
        </button>
    )
}

export default QuickSearch
