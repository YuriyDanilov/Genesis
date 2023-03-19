import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<div>
				<h1>LOGO</h1>
				<ul>
					<li>
						<a href='!#'>link there</a>
					</li>
					<li>
						<a href='!#'>link here</a>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
