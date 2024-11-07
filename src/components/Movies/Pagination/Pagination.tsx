import React from 'react';
import styles from './Pagination.module.scss';
import { PaginationButton } from './PaginationButton';

type PropsType = {
	pagesNum: number,
	currPage: number,
	changePage: (page: number) => void,
	buttonToShow?: number,
};

export const Pagination: React.FC<PropsType> = ({pagesNum, currPage, changePage, buttonToShow = 5}) => {
	const needLeftDots = currPage > Math.round(buttonToShow / 2);
	const needRightDots = (pagesNum <= 100 ? pagesNum : 100) - currPage > Math.round(buttonToShow / 2);

	console.log(currPage);

	return (
		<div className={styles.Pagination}>	
			<button>
				-
			</button>
			<PaginationButton currPage={1} changePage={changePage}>1</PaginationButton>
			{needLeftDots && <span>...</span>}
			{currPage <= 3 ?
				<>
					<PaginationButton currPage={2} changePage={changePage} active={currPage === 2}>2</PaginationButton>
					<PaginationButton currPage={3} changePage={changePage} active={currPage === 3}>3</PaginationButton>
					<PaginationButton currPage={4} changePage={changePage} active={currPage === 4}>4</PaginationButton>
				</>
			: currPage > 3 && currPage < 97 ?
				<>
					<PaginationButton currPage={currPage-1} changePage={changePage}>{currPage > 3 ? currPage - 1 : currPage === 2 ? currPage : ''}</PaginationButton>
					<PaginationButton currPage={currPage} changePage={changePage} active>{currPage}</PaginationButton>
					<PaginationButton currPage={currPage+1} changePage={changePage}>{currPage+1}</PaginationButton>
				</>
			:
				<>
					<PaginationButton currPage={97} changePage={changePage} active={currPage === 97}>97</PaginationButton>
					<PaginationButton currPage={98} changePage={changePage} active={currPage === 98}>98</PaginationButton>
					<PaginationButton currPage={99} changePage={changePage} active={currPage === 99}>99</PaginationButton>
				</>
			}
			{needRightDots && <span>...</span>}
			<PaginationButton currPage={pagesNum <= 100 ? pagesNum : 100} changePage={changePage}>{pagesNum <= 100 ? pagesNum : 100}</PaginationButton>
			<button>
				+
			</button>
		</div>
	)
}
