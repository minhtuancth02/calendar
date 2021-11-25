import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(fas, faStar, faStarHalfAlt)
library.add(far , faStar )



const StarRate = () => {

    const initialStar = JSON.parse(localStorage.getItem('rating')) || 0;
    
    const [rating, setRating] = useState(() => initialStar);
    const [hover, setHover] = useState(0);

    useEffect( () => {
        localStorage.setItem('rating', JSON.stringify(rating))
    }, [rating]);

    return (
        <div>
            <span style={{ color: `${(rating && hover) > 3 ? 'gold' : 'tomato'}`, fontSize: '1.5em'}}>
                {`${hover || rating}/5`}
                {[...Array(5)].map((_,i) => {
                    const starValue = i + 1;

                    return (
                        <label style={{ cursor: 'pointer', transition:"100ms"} }>
                            <input
                                style={{ display:'none'}}
                                type="radio" name='rating'
                                value={starValue}
                                onClick={() => setRating(starValue)}
                            />
                            <FontAwesomeIcon
                                icon={starValue <= (hover || rating) ? ["fas", 'star'] : ["far", 'star']}
                                key={i} style={{ marginLeft: '0.7rem' }}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        </label>
                    );
                })}
            </span>
        </div>
    )
}

export { StarRate }