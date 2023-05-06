import { useSession } from 'next-auth/react';
import Image from 'next/image';
const Profile = () => {
	const { data } = useSession();
	return (
		<div className='flex flex-col items-center'>
			<div className='py-2 px-3 border'>
				<span>Image</span>
				<Image
					src={data?.user?.image || ''}
					width={32}
					height={32}
					alt={data?.user?.name || ' '}
				/>
                {/* <p>{data?.user?.image}</p> */}
			</div>
			<div className='py-2 px-3 border'>
				<span>Email</span>
				<p>{data?.user?.email}</p>
			</div>
			<div className='py-2 px-3 border'>
				<span>Name</span>
				<p>{data?.user?.name}</p>
			</div>
		</div>
	);
};

export default Profile;
