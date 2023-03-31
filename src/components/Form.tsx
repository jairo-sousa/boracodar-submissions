import { Flex } from "@chakra-ui/react";
import { FieldSet } from "./FieldSet";
import question from "/question.svg";

export function Form() {
	return (
		<Flex as="form" w="32.8rem" direction="column" gap="2.4rem">
			<FieldSet
				label="Número do cartão"
				placeholder="Digite o número do cartão"
			/>
			<FieldSet
				label="Nome do titular"
				placeholder="Nome como está no cartão"
			/>
			<Flex gap="1.6rem">
				<Flex
					as={FieldSet}
					label="Validade"
					placeholder="mm/aa"
					inputType="number"
				/>
				<Flex
					as={FieldSet}
					customC="40%"
					label="CVV"
					placeholder="***"
					inputType="password"
					labelImg={question}
				/>
			</Flex>
		</Flex>
	);
}
