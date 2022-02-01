interface ButtonSchema {
    type: 'primary' | 'secondary' | 'cancel'
    label: string
    handler: () => void
}

function Button({ type, label, handler }: ButtonSchema) {
    const renderButton = () => {
        switch (type) {
            case 'primary':
                return 'bg-blue-400 hover:bg-blue-300'
            case 'secondary':
                return 'bg-gray-600 rounded hover:bg-gray-800'
            case 'cancel':
                return 'bg-rose-600 hover:bg-pink-800'
        }
    }

    return (
        <button
            className={`px-4 py-2 font-bold text-white rounded ${renderButton()} focus:outline-none`}
            type='button'
            onClick={() => handler()}
        >
            {label}
        </button>
    )
}

export default Button
