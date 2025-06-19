import Image from "next/image";
import {CardProps} from "@/components/Card/Card.types";


const Card = ({ header, body, footer, img }: CardProps) => {
    return (
        <article className="card">
            <header>
                <h2>{header}</h2>
            </header>

            <Image
                src={img}
                width={100}
                height={100}
                alt="Hot air balloons"/>
            <div className="content">
                <p>
                    {body}
                </p>
            </div>
            <footer>{footer}</footer>
        </article>
    )
}

export default Card;
