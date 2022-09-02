interface ButtonProps {
    type: 'primary' | 'secondary' | 'cancel'
    label: string
    handler: () => void
}

function Button({ type, label, handler }: ButtonProps) {
    const buttonStyle = {
        primary: 'bg-blue-400 hover:bg-blue-300',
        secondary: 'bg-gray-600 dark:bg-gray-700 rounded hover:bg-gray-500 dark:hover:bg-gray-600',
        cancel: 'bg-pink-700 dark:bg-pink-800 dark:hover:bg-pink-700 hover:bg-pink-600',
    }

    return (
        <button
            className={`rounded px-4 py-2 font-bold text-white ${buttonStyle[type]} outline-2 outline-offset-2 outline-teal-500 focus:outline`}
            type='button'
            onClick={() => handler()}
        >
            {label}
        </button>
    )
}

export default Button
