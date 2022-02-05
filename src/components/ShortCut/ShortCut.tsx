function ShortCut({ label }: { label: string }) {
    return (
        <span className='h-max rounded bg-slate-300 p-1 font-semibold text-slate-500 shadow-sm transition-colors duration-300 dark:bg-slate-400 dark:text-slate-700'>
            {label}
        </span>
    )
}
export default ShortCut
