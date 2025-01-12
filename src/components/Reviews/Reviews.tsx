import React from 'react'
import styles from './Reviews.module.scss';
import { axiosInstance } from '@/lib/axios';

type PropsType = {
    id: string
};

const getReviews = async (id: string) => {
    const response = await axiosInstance.get(`/api/movie/${id}/reviews`);

    const data = response.data;

    return data;
}

export const Reviews: React.FC<PropsType> = async ({id}) => {
    const reviews = await getReviews(id);

    console.log(reviews);

    return (
        <div>Reviews</div>
    )
}
