// eslint-disable-next-line
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import classes from './CourseReview.module.css'

const items = [
	{
		id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
		title: 'Lack of Motivation & How to Overcome It',
		tags: ['productivity'],
		launchDate: '2023-03-06T16:50:06.000Z',
		status: 'launched',
		description:
			'Reignite your inner drive by managing factors that dampen your motivation.',
		duration: 521,
		previewImageLink:
			'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
		rating: 3.5,
		meta: {
			slug: 'lack-of-motivation-how-to-overcome-it',
			skills: [
				'Aligning your goals with your motives',
				'Overcoming decision paralysis',
				'Reframing negative self-talk',
				'Gaining clarity',
				'Challenging yourself',
			],
			courseVideoPreview: {
				link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
				duration: 27,
				previewImageLink:
					'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
			},
		},
		lessons: [
			{
				id: '278e5a0e-8df1-4646-9984-10289d52dc2d',
				title: 'Why we lack motivation',
				duration: 255,
				order: 1,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1',
				meta: null,
			},
			{
				id: 'd2379510-3e3a-4d87-a3e9-05c1a0195548',
				title: 'Decision paralysis',
				duration: 266,
				order: 2,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-2/AppleHLS1/lesson-2.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-2',
				meta: null,
			},
			{
				id: '29a8fc4d-b2a4-420b-80de-73ecda13f28e',
				title: 'Negative self-talk',
				duration: 285,
				order: 3,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-3/AppleHLS1/lesson-3.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-3',
				meta: null,
			},
			{
				id: 'a7ffcfb9-32b0-4bb8-8c41-ed5e2a45fd4a',
				title: 'Lack of clarity',
				duration: 293,
				order: 4,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-4/AppleHLS1/lesson-4.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-4',
				meta: null,
			},
			{
				id: 'ec7df2b9-2fe2-49b7-81e2-5b5df86997e3',
				title: 'Lack of challenges',
				duration: 275,
				order: 5,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-5/AppleHLS1/lesson-5.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-5',
				meta: null,
			},
		],
		containsLockedLessons: true,
	},
	{
		id: '3b77ceb6-fb43-4cf5-a25b-8fe9222a0714',
		title: 'The Power of Self-Discipline: How to Stay on Track',
		tags: ['productivity'],
		launchDate: '2023-03-06T16:25:24.000Z',
		status: 'launched',
		description:
			'Find the inner strength to overcome procrastination and reach your goals.',
		duration: 509,
		previewImageLink:
			'https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track',
		rating: 3.5,
		meta: {
			slug: 'the-power-of-self-discipline-how-to-stay-on-track',
			skills: [
				'Increasing self-awareness',
				'Personal accountability',
				'Developing a routine',
				'Improving self-control',
				'Focusing on long-term goals',
			],
			courseVideoPreview: {
				link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/preview/AppleHLS1/preview.m3u8',
				duration: 19,
				previewImageLink:
					'https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track/preview',
			},
		},
		lessons: [
			{
				id: 'b9ad7391-0f0b-4fe1-b919-6525d76ad3c4',
				title: 'Why short-term gains aren’t worth it',
				duration: 229,
				order: 1,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-1/AppleHLS1/lesson-1.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-1',
				meta: null,
			},
			{
				id: '150d6b43-7a39-4a8f-b693-b3c519d62ee6',
				title: 'Exercise your self-control',
				duration: 280,
				order: 2,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-2/AppleHLS1/lesson-2.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-2',
				meta: null,
			},
			{
				id: 'aadd36f4-bf23-4f86-a6b2-767525d38989',
				title: 'Why we need routine',
				duration: 282,
				order: 3,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-3/AppleHLS1/lesson-3.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-3',
				meta: null,
			},
			{
				id: 'b311d60d-652c-4fbf-b687-d43004c98342',
				title: 'Become personally accountable',
				duration: 276,
				order: 4,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-4/AppleHLS1/lesson-4.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-4',
				meta: null,
			},
			{
				id: 'f5b9b0aa-baa6-4218-b16c-46152bd9b505',
				title: 'Develop self-awareness',
				duration: 302,
				order: 5,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-5/AppleHLS1/lesson-5.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-5',
				meta: null,
			},
		],
		containsLockedLessons: true,
	},
	{
		id: 'f58ff842-2d2b-4f24-9a4b-c6f6e1fd866e',
		title: 'Win Your Emotional Battle Against Procrastination',
		tags: ['productivity'],
		launchDate: '2023-03-06T16:13:29.000Z',
		status: 'launched',
		description:
			'Learn to manage negative emotions that make you put things off.',
		duration: 568,
		previewImageLink:
			'https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination',
		rating: 3.5,
		meta: {
			slug: 'Win-your-emotional-battle-against-procrastination',
			skills: [
				'Eliminating boredom',
				'Overcoming the fear of failure',
				'Dealing with uncertainty',
				'Managing feelings of guilt',
				'Recognizing your emotions',
			],
			courseVideoPreview: {
				link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/preview/AppleHLS1/preview.m3u8',
				duration: 17,
				previewImageLink:
					'https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination/preview',
			},
		},
		lessons: [
			{
				id: '7c8f20d8-8692-4810-bb25-f2be531c1bdc',
				title: 'Fear of the unknown',
				duration: 286,
				order: 3,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/lesson-3/AppleHLS1/lesson-3.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/Win-your-emotional-battle-against-procrastination/lesson-3',
				meta: null,
			},
			{
				id: '060d1660-179d-466c-9ec3-c3dd9df47cf6',
				title: 'Fear of failure',
				duration: 275,
				order: 4,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/lesson-4/AppleHLS1/lesson-4.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/Win-your-emotional-battle-against-procrastination/lesson-4',
				meta: null,
			},
			{
				id: '94d5890e-db6c-4b62-9e1e-ee5b7448ab93',
				title: 'Boredom',
				duration: 247,
				order: 5,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/lesson-5/AppleHLS1/lesson-5.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/Win-your-emotional-battle-against-procrastination/lesson-5',
				meta: null,
			},
			{
				id: '30ddb60b-712f-4a05-9439-f44c5e3d680f',
				title: 'Procrastination cycle',
				duration: 272,
				order: 1,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/lesson-1/AppleHLS1/lesson-1.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/Win-your-emotional-battle-against-procrastination/lesson-1',
				meta: null,
			},
			{
				id: 'cc8de864-6a2d-48bd-aea5-097b1a8e3524',
				title: 'Guilt & self-blame',
				duration: 296,
				order: 2,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/lesson-2/AppleHLS1/lesson-2.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/Win-your-emotional-battle-against-procrastination/lesson-2',
				meta: null,
			},
		],
		containsLockedLessons: true,
	},
	{
		id: '9c5d78a1-c393-4666-8de4-b9d10c424d30',
		title: 'Goal-Setting 101: Become Productive, Not Busy',
		tags: ['productivity'],
		launchDate: '2023-02-20T13:19:00.000Z',
		status: 'launched',
		description:
			'Achieve anything you want by defining goals that actually matter to you.',
		duration: 566,
		previewImageLink:
			'https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy',
		rating: 3.5,
		meta: {
			slug: 'goal-setting-101-become-productive-not-busy',
			skills: ['Define goals that matter to you'],
			courseVideoPreview: {
				link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/preview/AppleHLS1/preview.m3u8',
				duration: 17,
				previewImageLink:
					'https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy/preview',
			},
		},
		lessons: [
			{
				id: '02485ae1-a7ea-4e26-a5fe-ddc98b806255',
				title: 'What is a meaningful goal?',
				duration: 269,
				order: 1,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/lesson-1/AppleHLS1/lesson-1.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/goal-setting-101-become-productive-not-busy/lesson-1',
				meta: null,
			},
			{
				id: '6f218b4b-5f21-4d2f-8e71-4603d8edbbea',
				title: 'Aligning your goals with your identity',
				duration: 297,
				order: 2,
				type: 'video',
				status: 'unlocked',
				link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/lesson-2/AppleHLS1/lesson-2.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/goal-setting-101-become-productive-not-busy/lesson-2',
				meta: null,
			},
			{
				id: '3221339e-d73e-4bdc-87aa-4e9c0a76ca58',
				title: 'How to stay on track',
				duration: 300,
				order: 3,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/lesson-3/AppleHLS1/lesson-3.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/goal-setting-101-become-productive-not-busy/lesson-3',
				meta: null,
			},
			{
				id: '468c075d-df0c-4fe9-b201-cd99c5aa60fd',
				title: 'Goal-setting techniques',
				duration: 300,
				order: 4,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/lesson-4/AppleHLS1/lesson-4.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/goal-setting-101-become-productive-not-busy/lesson-4',
				meta: null,
			},
			{
				id: '07e54aff-3635-437e-98eb-f08c353d9150',
				title: 'Action plan',
				duration: 300,
				order: 5,
				type: 'video',
				status: 'locked',
				link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/lesson-5/AppleHLS1/lesson-5.m3u8',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/goal-setting-101-become-productive-not-busy/lesson-5',
				meta: null,
			},
		],
		containsLockedLessons: true,
	},
	{
		id: '6d923b27-9980-41c1-bd0f-102772377b8d',
		title: 'How to Stop Procrastinating',
		tags: ['productivity'],
		launchDate: '2023-02-12T13:04:20.000Z',
		status: 'launched',
		description:
			'It only takes 10-15 minutes a day to eliminate procrastination once and for all',
		duration: 4560,
		previewImageLink:
			'https://wisey.app/assets/images/web/course-covers/anti-procrastination-quiz',
		rating: 3.5,
		meta: {
			slug: 'anti-procrastination-quiz',
			skills: ['Taking responsibility '],
			courseVideoPreview: {
				link: 'https://wisey.app/videos/anti-procrastination-quiz/preview/AppleHLS1/preview.m3u8',
				duration: 0,
				previewImageLink:
					'https://wisey.app/assets/images/web/course-covers/anti-procrastination-quiz/preview',
			},
		},
		lessons: [
			{
				id: '6c77bb21-2410-406a-9e8d-36c27fe43826',
				title: 'Understand your procrastination',
				duration: 420,
				order: 1,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-1',
				meta: {
					difficulty: 'medium',
				},
			},
			{
				id: '49936797-7dbe-461b-a05b-cc9a3ad512ca',
				title: 'Motivation vs. procrastination',
				duration: 300,
				order: 2,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-2',
				meta: {
					difficulty: 'medium',
				},
			},
			{
				id: '15e8f9a7-9531-4156-b5d2-d282a89685a7',
				title: 'How to become more motivated',
				duration: 240,
				order: 3,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-3',
				meta: {
					difficulty: 'medium',
				},
			},
			{
				id: '7a25346e-2aca-45e8-833e-136e76d8f4e6',
				title: 'Irrational thinking & task avoidance',
				duration: 540,
				order: 4,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-4',
				meta: {
					difficulty: 'medium',
				},
			},
			{
				id: '51572006-522d-411a-b90b-db37d6e2e133',
				title: 'How to change limiting beliefs',
				duration: 300,
				order: 5,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-5',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: '1fbc389c-d48b-410a-8f2a-a28341a64aa0',
				title: 'Dare to take action',
				duration: 240,
				order: 6,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-6',
				meta: {
					difficulty: 'medium',
				},
			},
			{
				id: 'bfdc3c41-a943-4a42-b4b3-ea91e7d9cfce',
				title: 'How to keep procrastination at bay',
				duration: 300,
				order: 7,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-7',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: '72e696cd-f044-42a6-9325-f8de0a37daa7',
				title: 'How to unlock wasted time',
				duration: 540,
				order: 8,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-8',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: 'c378d56e-49d0-4f68-aa3a-84040c4d720b',
				title: 'Beware of toxic productivity',
				duration: 240,
				order: 9,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-9',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: '59835a82-d516-4824-926f-9bc0d1187ec8',
				title: 'Multitasking vs. single-tasking',
				duration: 300,
				order: 10,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-10',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: '4c6bf5cf-9be1-4eae-95ea-c59b2d59b420',
				title: 'Learn to delegate tasks',
				duration: 300,
				order: 11,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-11',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: 'd1097254-b44f-44a7-bec0-9e3cab9fec3e',
				title: 'How to set proper priorities',
				duration: 300,
				order: 12,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-12',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: '208ac299-8bf5-4de5-b375-9688bedef4f7',
				title: 'Create a schedule that works',
				duration: 240,
				order: 13,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-13',
				meta: {
					difficulty: 'easy',
				},
			},
			{
				id: '0889c706-7458-44af-8598-db8671689956',
				title: 'Analyze how you manage your time',
				duration: 300,
				order: 14,
				type: 'quiz_simulator',
				status: 'unlocked',
				previewImageLink:
					'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-14',
				meta: {
					difficulty: 'easy',
				},
			},
		],
		containsLockedLessons: false,
	},
]

const CourseReview = ({ courseId, setViewedCourse }) => {
	// const [course, setCourse] = useState(items)

	const chosenCourse = items.find((c) => c.id === courseId)

	const [url, setUrl] = useState(chosenCourse.lessons[0].link)
	const [active, setActive] = useState(0)

	useEffect(() => {
		const progress = localStorage.getItem(courseId)
		console.log(progress)
		if (progress) {
			setUrl(chosenCourse.lessons[+progress].link)
			setActive(+progress)
		}

		// const fetchHandler = async () => {
		// 	const chosenCourse = await axios.get(
		// 		'http://api.wisey.app/api/v1/core/preview-courses/' + courseId
		// 	)

		// 	setCourse(chosenCourse)
		// }
		// fetchHandler()
	}, [chosenCourse, courseId])

	const setUrlHandler = (e) => {
		const idx = e.target.id

		setActive(+idx)

		if (chosenCourse.lessons[idx].status === 'unlocked') {
			setUrl(chosenCourse.lessons[idx].link)
		} else {
			setUrl('')
		}

		localStorage.setItem(courseId, idx)
	}

	const clickHandler = () => {
		setViewedCourse(null)
	}

	return (
		<section className={classes.lessons}>
			<h3>{chosenCourse.description}</h3>

			<div className={classes.player}>
				{url && (
					<ReactPlayer
						width={'350px'}
						height={'225px'}
						// playing
						controls
						url={url}
					/>
				)}
				{!url && <p>lesson is locked</p>}
			</div>

			<ul className={classes.lessons_list}>
				{chosenCourse.lessons.map((l, i) => (
					<li
						id={i}
						key={l.id}
						onClick={setUrlHandler}
						className={active === i ? classes.active : ''}
					>
						<img
							src={l.previewImageLink + `/lesson-${i + 1}.webp`}
							alt='poster'
							id={i}
						/>
						<span id={i}>
							{parseInt(l.duration / 60)}:{l.duration % 60}
						</span>
						<p id={i}>{`${i + 1}. ${l.title}`}</p>
					</li>
				))}
			</ul>
			<button onClick={clickHandler}>Back to the courses</button>
		</section>
	)
}

export default CourseReview
