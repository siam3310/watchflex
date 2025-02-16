'use client'

import React, { use, useState } from 'react'
import styles from './Reviews.module.scss';
import { axiosInstance } from '@/lib/axios';
import { Review } from './Review';
import { RequestReviewsResponseDataModel } from '@/models';
import cn from 'classnames'
import { AddPopup } from './AddPopup';
import { useBodyStore } from '@/store/useBodyStore';

type PropsType = {
    id: string, 
    reviews: Promise<RequestReviewsResponseDataModel>,
};

export const Reviews: React.FC<PropsType> = async ({id, reviews}) => {
    const [isAddReviewPopupShowing, setIsAddReviewPopupShowing] = useState<boolean>(false);
    const reviewsData = await use(reviews);

    const handleClick = () => {
        const currStatus = isAddReviewPopupShowing;
        setIsAddReviewPopupShowing(!currStatus);  
    }

    console.log(reviewsData);

    return (
        <section className={cn(styles.Reviews, 'container')}>
            <div className={styles.top}>
                <h3 className={styles.title}>Відгуки</h3>
                <button className={styles.addReviewBtn} onClick={handleClick}>+</button>
            </div>
            <div className={styles.reviewsList}>
                { reviewsData.results.length > 0 ?
                    reviewsData.results.map(data => (
                        <Review data={data} key={data.id}/>
                    ))
                :
                    <p className={styles.noText}>Коментарів ще немає</p>
                }
            </div>
            <AddPopup isShowing={isAddReviewPopupShowing} />
        </section>
    )
}
