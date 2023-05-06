import {
	signIn,
	signOut,
	useSession,
} from 'next-auth/react';

const Button = () => {
	const { data: session } = useSession();
	if (session?.user) {
		return (
			<button
				className='py-2 px-3 border rounded bg-gray-600'
				onClick={() => signOut()}
			>
				Sign Out
			</button>
		);
	}
	return (
		<button
			className='py-2 px-3 border rounded bg-gray-600'
			onClick={() => signIn('github')}
		>
			Sign In
		</button>
	);
};

export default Button;
