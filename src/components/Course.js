import star from './svg/star-icon.svg'

import classes from './Course.module.css'

const Course = ({ course, viewed }) => {
	const clickHandler = () => {
		viewed(course.id)
	}

	let text = course.meta.skills ? 'acquired skills:' : ''

	return (
		<div className={classes.course} onClick={clickHandler}>
			<img
				src={course.previewImageLink + '/cover.webp'}
				alt='failed to load'
				className={classes.preview}
			/>
			<div className={classes.control}>
				<div>
					<h3>{course.title}</h3>
					<p>{text}</p>
					<ul>
						{course?.meta?.skills?.map((skill, idx) => (
							<li key={idx}>{skill}</li>
						))}
					</ul>
				</div>
				<div>
					<img src={star} alt='rating' />
					<p>lessons: {course.lessonsCount}</p>
					<p className={classes.rating}>{course.rating}</p>
				</div>
			</div>
		</div>
	)
}

export default Course
