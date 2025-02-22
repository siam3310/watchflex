'use client'

import React, { useState } from 'react'
import styles from './Review.module.scss';
import Image from 'next/image'
import { ReviewType } from '@/types';
import { parseDate } from '@/utils/client/parseDate';

type PropsType = {
    data: ReviewType,
};

export const Review: React.FC<PropsType> = ({data}) => {
    const { author, author_details, content, created_at, id, updated_at, url } = data;
    const [isFullText, setIsFullText] = useState<boolean>(false);

    const date = parseDate(created_at);

    const shortedText = content.split(' ').slice(0, 100).join(' ')

    const showMoreText = () => {
        setIsFullText(true)
    }

    const hideFullText = () => {
        setIsFullText(false)
    }

    return (
        <div className={styles.Review}>
            <div className={styles.avatar}>
                <Image 
                    alt={`${author}'s avatar image`}
                    src={`https://image.tmdb.org/t/p/original/${author_details.avatar_path}`}
                    width={40}
                    height={40}
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.author}>
                    <h4 className={styles.name}>{author}</h4>
                    <p className={styles.date}>{date}</p>
                </div>
                <p className={styles.text}>
                    {shortedText.length == content.length ?
                       content
                    :   
                        <>  
                            {isFullText ? content : shortedText} 
                            <button 
                                className={styles.moreBtn}
                                onClick={isFullText ? hideFullText : showMoreText}
                            >
                                {isFullText ? 'Менше' : 'Ще'}
                            </button>
                        </>
                    }
                </p>
            </div>
        </div>
    )
}
