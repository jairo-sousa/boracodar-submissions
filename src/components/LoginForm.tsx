import { Box, Button, Flex, Img, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function ChakraInput() {
	return <Input h="5.3rem" fontSize="1.4rem" borderRadius="0.4rem"></Input>;
}

function PasswordVisibility() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	function toggleVisibility() {
		setIsPasswordVisible(!isPasswordVisible);
	}
	return (
		<Img
			src={isPasswordVisible ? "/show.svg" : "/hide.svg"}
			pos="absolute"
			right="1.2rem"
			top="50%"
			transform="translate(0, -0.9rem)"
			cursor="pointer"
			onClick={() => {
				toggleVisibility();
			}}
		/>
	);
}

export function LoginForm() {
	return (
		<Flex as="form" direction="column" w="38.4rem" gap="3.2rem">
			<Flex direction="column" gap="1.6rem">
				<Box as="label" fontSize="1.4rem" fontWeight={600}>
					E-mail
				</Box>
				<Input as={ChakraInput} type="email" placeholder="Digite seu e-mail" />
				<Box as="label" fontSize="1.4rem" fontWeight={600}>
					Senha
				</Box>
				<Flex pos="relative">
					<Input
						as={ChakraInput}
						type="password"
						placeholder="Digite sua senha"
					></Input>
					<PasswordVisibility />
				</Flex>
			</Flex>
			<Button h="5.6rem" bg="#7C3AED" color="#ffffff" borderRadius="0.4rem">
				Entrar
			</Button>
			<Text>
				Ainda não tem uma conta?
				<Box as="span" fontWeight={700} color="#7C3AED" ml="0.4rem">
					Inscreva-se
				</Box>
			</Text>
		</Flex>
	);
}
