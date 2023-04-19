import { Flex } from "@chakra-ui/react";
import { File } from "./File";
import { files } from "../utils/getFiles";

export function Files() {
	return (
		<Flex gap="1.2rem" direction="column">
			{files.map((file, i) => {
				return (
					<File
						key={`${file.name} - ${i}`}
						status={file.status}
						size={file.size}
						totalSendt={file.totalSendt}
						name={file.name}
						measurement={file.measurement}
					/>
				);
			})}
		</Flex>
	);
}
