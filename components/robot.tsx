import Link from 'next/link';

interface Props {
    id: string;
    code: string;
}

const Robot: React.FC<Props> = ({ id, code }) => {

    return (<>
        <ul>
            <li>
                <Link href={`/robots/robot/${id}`}>
                    <a>
                        <p><b>Id</b>: {id}</p>
                        <p><b>Code</b>: {code}</p>
                    </a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
                ul {margin-bottom: 20px}
                li {line-height: 1}
                li a:focus,
                li a:hover {color: red;}
                a {text-decoration: none;
                    color: black;}
            `}</style>
    </>)
}

export default Robot;