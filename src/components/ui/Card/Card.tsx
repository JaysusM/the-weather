import './Card.scss';

const Card = ({ children, className }: CardProps) => {

    const cardClassname = `card-container ${ className ?? ''}`;

    return <div className={ cardClassname }>
        { children }
    </div>
}

type CardProps = {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

export default Card;