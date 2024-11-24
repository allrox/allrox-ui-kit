export default function Grid({ children, cols }) {
    return (
        <div className={`grid grid-cols-1 ${cols} gap-8 py-4`}>
            {children}
        </div>
    )
}