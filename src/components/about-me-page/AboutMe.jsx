import Header from '../header/Header';
import Main from '../main/Main';
import { StyledPage } from './styles';

const AboutMe = () => {
	const xvalue = '100vw';
	const minusxvalue = '-100vw';
	return (
		<div>
			<StyledPage
				top={'0'}
				initial={{ x: xvalue }}
				animate={{ x: 0 }}
				exit={{ x: xvalue }}
				transition={{ duration: 0.3, delay: 0.1 }}
			></StyledPage>
			<StyledPage
				top={'33.33vh'}
				initial={{ x: minusxvalue }}
				animate={{ x: 0 }}
				exit={{ x: minusxvalue }}
				transition={{ duration: 0.3, delay: 0.1 }}
			></StyledPage>
			<StyledPage
				top={'66.66vh'}
				initial={{ x: xvalue }}
				animate={{ x: 0 }}
				exit={{ x: xvalue }}
				transition={{ duration: 0.3, delay: 0.1 }}
			></StyledPage>
			<Header />
			<Main />
		</div>
	);
};

export default AboutMe;
