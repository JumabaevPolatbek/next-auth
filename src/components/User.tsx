import { IUser } from '@/types/product';
import Image from 'next/image';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
export const UserDetail = ({ user }: { user: IUser }) => {
	return (
		<TableRow
			key={user.username}
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}
		>
			<TableCell
				component='td'
				width={'fit-content'}
			>
				<Image
					src={user.user_detail.user_image}
					width={100}
					height={100}
					alt={user.username}
				/>
			</TableCell>
			<TableCell >
				{user.username}
			</TableCell>
			<TableCell >
				{user.user_detail.first_name}
			</TableCell>
			<TableCell >
				{user.user_detail.last_name}
			</TableCell>
			<TableCell >
				{`${user.is_admin}`}
			</TableCell>
		</TableRow>
	);
};
