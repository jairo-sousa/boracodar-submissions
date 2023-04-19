import { Status } from "./Status";

export type FileProps = {
	status: Status;
	size: number;
	totalSendt: number;
	name: string;
	measurement: string;
};
