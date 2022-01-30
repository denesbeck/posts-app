import { FiPlus } from 'react-icons/fi'

function AddButton() {
    return (
        <div className='fixed p-2 text-gray-200 bg-teal-500 rounded-full shadow-md cursor-pointer lg:right-10 lg:bottom-10 xl:p-3 hover:bg-teal-400 bottom-6 sm:bottom-8 sm:right-8 right-6 xl:bottom-12 xl:right-12'>
            <FiPlus className='w-8 h-8' />
        </div>
    )
}

export default AddButton
