import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { FileIcon } from "./FileIcon";
import { Status } from "../types/Status";
import { FileProps } from "../types/FileProps";

export function File({
	status,
	name,
	size,
	totalSendt,
	measurement,
}: FileProps) {
	const percentage = ((totalSendt / size) * 100).toFixed(0);
	const loadnigBg = {
		SENDING: "linear-gradient(90deg, rgba(58, 97, 237, 0.52) 0%, #7C3AED 100%)",
		SENT: "#73B172",
		ERROR: "",
	}[status];

	const percentColor = {
		SENDING: "#9892A6",
		SENT: "#73B172",
		ERROR: "#E36363",
	}[status];

	const actionImg = {
		SENDING: "cancel",
		SENT: "",
		ERROR: "retry",
	}[status];

	const sizeProgress =
		size == totalSendt || totalSendt == 0
			? `${size} ${measurement}`
			: `${totalSendt} ${measurement} / ${size} ${measurement}`;

	return (
		<Flex
			bg="#FFFFFF"
			w="100%"
			h="7.2rem"
			borderRadius="0.8rem"
			p="0.8rem"
			align="center"
			justify="space-between"
			boxShadow="0px 4px 16px #EAE2FD"
		>
			<FileIcon status={status} />
			<Flex h="100%" direction="column" justify="space-between">
				<Box>
					<Text color="#575361" fontSize="1.4rem" fontWeight={700}>
						{name}
					</Text>
					<Text color="#857E95" fontSize="1.2rem">
						{sizeProgress}
					</Text>
				</Box>
				<Box w="32.4rem" h="0.8rem" bg="#E3E3ED" borderRadius="1rem">
					<Box
						h="100%"
						w={`${percentage}%`}
						borderRadius="1rem"
						background={loadnigBg}
					/>
				</Box>
			</Flex>
			<Flex
				h="100%"
				direction="column"
				justify={actionImg ? "space-between" : "end"}
			>
				{actionImg && (
					<Img
						src={`${actionImg}.svg`}
						alt={`${actionImg} icon`}
						h="1rem"
						cursor="pointer"
					/>
				)}
				<Text color={percentColor} lineHeight="70%" fontSize="1.2rem">
					{status != "ERROR" ? `${percentage}%` : "Erro"}
				</Text>
			</Flex>
		</Flex>
	);
}
