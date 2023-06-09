import { IUser } from "@/types/product";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserDetail } from "@/components/User";

export const getServerSideProps: GetServerSideProps<{
  data: IUser[];
}> = async (ctx) => {
  const { req, res } = ctx;
  const session = await getSession(ctx);
  const response = await fetch("https://ecommerce.icedev.uz/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.token.access_token}`,
    },
  });

  return {
    props: {
      data: await response.json(),
    },
  };
};
export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="container mx-auto mt-2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell width={"fit-content"}>Photo</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Role Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.map((user) => <UserDetail user={user} key={user.id} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
