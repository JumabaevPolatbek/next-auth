import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Button from './Button';

type Props = {
	children: React.ReactNode;
};
const AppBar: React.FC<Props> = ({ children }) => {
	const { status } = useSession();
	return (
		<>
			<nav className='flex justify-evenly items-start'>
				<Link href={'/'}>Home</Link>
				<Link href={'/protected'}>Protected</Link>
				<Link href={'/about'}>About</Link>
				{status === 'authenticated' ? (
					<Button />
				) : (
					<Link href={'/login'}>Login</Link>
				)}
			</nav>
			{children}
		</>
	);
};

export default AppBar;
