import pic from './svg/man.png'

import classes from './Main.module.css'

const Main = (props) => {
	return (
		<section className={classes.main_section}>
			<h1>Learn Online</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde quae
				saepe sint adipisci deserunt nobis laudantium error asperiores officia,
				id voluptate, aspernatur obcaecati commodi tempora ea temporibus
				nostrum. Mollitia.
			</p>
			<img src={pic} alt='X' />
		</section>
	)
}

export default Main
