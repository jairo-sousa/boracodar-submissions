import { Flex, Img, Text } from "@chakra-ui/react";
import { AddButton } from "./components/AddButon";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form";

import shield from "/shield.svg";
import visa from "/visa.svg";
import master from "/master.svg";
import elo from "/elo.svg";

export function App() {
	return (
		<Flex
			w="73.6rem"
			bg="#1F2937"
			border="0.1rem solid #374151"
			borderRadius="0.8rem"
			p="3.2rem"
			direction="column"
			justify="space-between"
			gap="4.8rem"
		>
			<Flex w="100%" justify="space-between" align="center">
				<Form />
				<Flex direction="column" align="center" gap="3.2rem">
					<Card brand={visa} />
					<Flex gap="1rem">
						<Img src={shield} />
						<Text>Seus dados estão seguros</Text>
					</Flex>
				</Flex>
			</Flex>
			<AddButton />
		</Flex>
	);
}
