'use client';

import { CardProps } from './Card.types';
import {
    getCardStyle,
    cardSectionStyle,
    cardImageStyle,
} from './Card.styles';

const Card = ({
                  header,
                  body,
                  footer,
                  image,
                  bordered = true,
              }: CardProps) => {
    return (
        <div style={getCardStyle(bordered)}>
            {header && <div style={cardSectionStyle}>{header}</div>}
            {image && <img src={image} alt="Card image" style={cardImageStyle} />}

            {body && <div style={cardSectionStyle}>{body}</div>}
            {footer && <div>{footer}</div>}
        </div>
    );
};

export default Card;
