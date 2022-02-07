import { GiVintageRobot } from 'react-icons/gi'

function NoResults() {
    return (
        <div className='col-span-4 grid w-full content-center justify-center py-20'>
            <div className='flex space-x-6'>
                <GiVintageRobot className='h-20 min-h-fit w-20 min-w-fit text-slate-800 dark:text-slate-200' />
                <p className='self-center text-lg font-semibold text-slate-800 dark:text-slate-200 '>
                    No records based on your search criterion! <span className='text-blue-400'>:(</span>
                </p>
            </div>
        </div>
    )
}

export default NoResults
