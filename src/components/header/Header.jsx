import logo from '../../assets/eden_logo.png'
import './header.css'
const Header = () => {
	return (
		<header className='header__container'>
			{' '}
			<img width={'30'} height={'30'} src={logo} />
			<h1 className='header__title'>Eden</h1>
		</header>
	)
}

export { Header }
