export default function MenuItem({ label, link, target, props }) {

    return (
        <li className={`pb-2 border-white/[.1] border-bottom border-1 border-b sm:border-0 sm:pb-0 ${props}`}>
            <a href={link} target={target} >
                {label}
            </a>
        </li>
    )
}