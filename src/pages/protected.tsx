import { IUser } from "@/types/product";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { UserDetail } from "@/components/User";
type Data = {
  users: IUser[];
};

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  ctx
) => {
  const { req } = ctx;
  const session = await getSession({ req });
  const res = await fetch("https://ecommerce.icedev.uz/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.token.access_token}`,
    },
  });
  const data: Data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default function ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  return (
    <>
      <UserDetail users={data.users} />
      {data.users?.map((user) => (
        <div>{user.username}</div>
      ))}
    </>
  );
}
