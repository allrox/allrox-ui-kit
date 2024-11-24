export default function MenuItem({ label, link, state }) {

    return (
        <li className={state}>
            <a href={link} target="_blank">
                {label}
            </a>
        </li>
    )
}