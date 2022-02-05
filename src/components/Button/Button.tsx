interface ButtonProps {
    type: 'primary' | 'secondary' | 'cancel'
    label: string
    handler: () => void
}

function Button({ type, label, handler }: ButtonProps) {
    const renderButton = () => {
        switch (type) {
            case 'primary':
                return 'bg-blue-400 hover:bg-blue-300'
            case 'secondary':
                return 'bg-gray-600 dark:bg-gray-700 rounded hover:bg-gray-500 dark:hover:bg-gray-600'
            case 'cancel':
                return 'bg-pink-700 dark:bg-pink-800 dark:hover:bg-pink-700 hover:bg-pink-600'
        }
    }

    return (
        <button
            className={`rounded px-4 py-2 font-bold text-white ${renderButton()} outline-2 outline-offset-2 outline-teal-500 focus:outline`}
            type='button'
            onClick={() => handler()}
        >
            {label}
        </button>
    )
}

export default Button
