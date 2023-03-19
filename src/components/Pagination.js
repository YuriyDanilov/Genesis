import classes from './Pagination.module.css'

const Pagination = (props) => {
	const pageNumbers = []
	const numberOfPages = Math.ceil(props.totalCourses / props.coursesPerPage)

	for (let i = 1; i <= numberOfPages; i++) {
		pageNumbers.push(i)
	}

	return (
		// <div>
		<ul className={classes.pagination}>
			{pageNumbers.map((n) => (
				<li key={n}>
					<a href='!#' onClick={(e) => props.paginationHandler(e, n)}>
						{n}
					</a>
				</li>
			))}
		</ul>
		// </div>
	)
}

export default Pagination
