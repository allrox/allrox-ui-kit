export default function Grid({ children, props }) {
    return (
        <div className={`grid grid-cols-1 ${props} gap-10 py-4`}>
            {children}
        </div>
    )
}