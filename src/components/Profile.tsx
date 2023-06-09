import { useSession } from "next-auth/react";
import Image from "next/image";
const Profile = () => {
  const { data } = useSession();
  return (
    <div className="flex flex-col items-center">
      <div className="py-2 px-3 border">
        <span>Image</span>
        {/* <Image
					src={data?.user?.image || ''}
					width={32}
					height={32}
					alt={data?.user?.name || ' '}
				/> */}
        {/* <p>{data?.user?.image}</p> */}
      </div>
      <div className="py-2 px-3 border">
        <span>Is Admin</span>
        <p>{data?.user?.decode.is_admin}</p>
      </div>
      <div className="py-2 px-3 border">
        <span>Name</span>
        <p>{data?.user?.decode.sub}</p>
      </div>
    </div>
  );
};

export default Profile;
