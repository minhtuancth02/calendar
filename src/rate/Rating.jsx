import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(fas, faStar, faStarHalfAlt)
library.add(far , faStar )


function arrayStar(value) {
    let stars = [];
    const [whole, half] = parseFloat(value).toString().split(".");

    if (whole > 5) {
       stars = [["far", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star']]
    }
    else {
        for (let i = 0; i < whole; i++) stars.push(["fas", 'star']);
        if (half) stars.push(["fas", "star-half-alt"]);
        for (let i = whole; i < (half ? 4 : 5); i++) stars.push(["far", 'star']);
    }

    return stars;
};

const Rating = ({ value }) => {
    return (
        <div>
            <span style={{ color: `${value > 3 ? 'DodgerBlue' : 'coral' }`, fontSize: '1.5em' , textShadow: '3em' }}>
                { (Number(value) === value && value % 1 !== 0) ? `${parseInt(value)}.5 / 5` : `${value} / 5`}
                {
                    arrayStar(value).map((star, i) =>
                        <FontAwesomeIcon icon={star} key={i} style={{ marginLeft: '0.7rem' }} />)
                }
            </span>
        </div>
    )
}

export default Rating


// single star
// function getStar(value) {
//     switch (value) {
//         case 0: return <Star />;
//         case 50: return <FontAwesomeIcon icon={faStarHalfAlt} />;
//         case 100: return <FontAwesomeIcon icon={faStar} />;
//         default: return <Star />;
//     }


// Array 5 star
// function arrayStar(value) {
//     switch (parseFloat(value)) {
//         case 0.0: return [ ["far", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star'] ];
//         case 0.5: return [ ["fas", "star-half-alt"] , ["far", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star']];
//         case 1.0: return [ ["fas", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star']];
//         case 1.5: return [ ["fas", 'star'], ["fas", "star-half-alt"], ["far", 'star'], ["far", 'star'], ["far", 'star']];
//         case 2.0: return [["fas", 'star'], ["fas", 'star'], ["far", 'star'], ["far", 'star'], ["far", 'star']];
//         case 2.5: return [["fas", 'star'], ["fas", 'star'],["fas", "star-half-alt"] , ["far", 'star'], ["far", 'star']];
//         default: return [["far", 'star'],["far", 'star'],["far", 'star'],["far", 'star'],["far", 'star']];
//     }
// };