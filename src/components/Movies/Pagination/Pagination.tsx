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

	const prevPage = () => {
		changePage(currPage-1);
	}

	const nextPage = () => {
		changePage(currPage+1);
	}

	const maxPages = pagesNum > 100 ? 100 : pagesNum;

	console.log(currPage);

	//TODO: fix pagination in the case in pages count < 5

	return (
		<div className={styles.Pagination}>	
			{currPage > 1 &&
				<button onClick={prevPage}>
					-
				</button>
			}
			<PaginationButton currPage={1} changePage={changePage} active={currPage===1}>1</PaginationButton>
			{needLeftDots && <span>...</span>}
			{pagesNum > 5 ? currPage <= 3 ?
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
			: 
				<>
					{pagesNum > 2 && <PaginationButton currPage={2} changePage={changePage}>2</PaginationButton>}
					{pagesNum > 3 && <PaginationButton currPage={3} changePage={changePage}>3</PaginationButton>}
					{pagesNum > 4 && <PaginationButton currPage={4} changePage={changePage}>4</PaginationButton>}
				</>
			}
			{needRightDots && <span>...</span>}
			{pagesNum > 1 && <PaginationButton currPage={maxPages} changePage={changePage}>{maxPages}</PaginationButton>}
			
			{currPage < maxPages &&
				<button onClick={nextPage}>
					+
				</button>
			}
		</div>
	)
}
