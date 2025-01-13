import React from 'react'
import styles from './Review.module.scss';
import { ReviewType } from '@/types';

type PropsType = {
    data: ReviewType,
};

export const Review: React.FC<PropsType> = ({data}) => {
    const { author, author_details, content, created_at, id, updated_at, url } = data;

    console.log('author details', author_details)

    return (
        <div>Review</div>
    )
}
