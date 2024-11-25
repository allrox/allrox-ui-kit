export default function MenuItem({ label, link, target, state }) {

    return (
        <li className={state}>
            <a href={link} target={target} >
                {label}
            </a>
        </li>
    )
}