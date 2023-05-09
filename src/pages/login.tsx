import FormSign from '@/components/FormSign';
import { signIn } from 'next-auth/react';

const login = () => {
	return (
		<div className='flex flex-col items-center h-[100vh] justify-center'>
			<button
				onClick={() =>
					signIn('github', {
						callbackUrl: '/about',
					})
				}
				className='py-2 px-3 border rounded bg-green-400'
			>
				GitHub
			</button>
			<button
				onClick={() => signIn('google')}
				className=' my-4 py-2 px-3 border rounded bg-red-400'
			>
				Google
			</button>
			<button
				onClick={() => signIn('yandex')}
				className='py-2 px-3 border rounded bg-yellow-400'
			>
				Yandex
			</button>
			<FormSign/>
		</div>
	);
};

export default login;
