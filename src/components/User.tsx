import { IUser } from "@/types/product";
import Image from "next/image";

export const UserDetail = ({ users }: { users: IUser[] }) => {
  console.log(users);
  return (
    <>
      {users?.map((user) => {
        return (
          <div
            className="flex justify-between items-center py-2 px-3 my-1 border rounded"
            key={user.id}
          >
            <Image
              src={user.user_detail.user_image}
              width={60}
              height={60}
              alt={user.username}
            />
            <div className="text-[20px] px-3 py-2">{user.username}</div>
            <div>{user.user_detail.first_name}</div>
            <div>{user.user_detail.last_name}</div>
          </div>
        );
      })}
    </>
  );
};
