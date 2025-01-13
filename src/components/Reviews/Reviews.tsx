import React from 'react'
import styles from './Reviews.module.scss';
import { axiosInstance } from '@/lib/axios';
import { Review } from './Review';
import { RequestReviewsResponseDataModel } from '@/models';
import cn from 'classnames'

type PropsType = {
    id: string
};

const getReviews = async (id: string) => {
    const response = await axiosInstance.get(`/api/movie/${id}/reviews`);

    const data = response.data;

    return data;
}

export const Reviews: React.FC<PropsType> = async ({id}) => {
    const reviews = await getReviews(id) as RequestReviewsResponseDataModel;

    console.log(reviews);

    return (
        <div className={cn(styles.Reviews, 'container')}>
            <h3 className={styles.title}>Відгуки</h3>
            <div className={styles.reviewsList}>
                { reviews.results.length > 0 ?
                    reviews.results.map(data => (
                        <Review data={data}  />
                    ))
                :
                    <p className={styles.noText}>Коментарів ще немає</p>
                }
            </div>
        </div>
    )
}
