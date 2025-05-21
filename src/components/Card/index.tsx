import "./styles.css";

type Props = {
    title: string;
}

export default function Card({title} : Props) {

    return (
        <div className="container">
            <h2>{title}</h2>
        </div>
    )
}
