import { Flex, Img, Input, Text } from "@chakra-ui/react";

type FieldSetProps = {
	label: string;
	placeholder?: string;
	inputType?: string;
	customC?: string;
	labelImg?: string;
};

export function FieldSet({
	label,
	placeholder,
	inputType,
	customC,
	labelImg,
}: FieldSetProps) {
	return (
		<Flex
			as="fieldset"
			w={customC ? customC : "100%"}
			direction="column"
			gap="0.6rem"
		>
			<Flex gap="0.55rem">
				<Text as="label" fontSize="1.4rem">
					{label}
				</Text>
				{labelImg && <Img src={labelImg} />}
			</Flex>
			<Input
				placeholder={placeholder}
				type={inputType && inputType}
				h="4.8rem"
				border="0.1rem solid #374151"
				fontSize="1.6rem"
				_focusVisible={{
					outline: "none",
				}}
				_hover={{
					outline: "none",
				}}
				_focusWithin={{
					border: "0.1rem solid #9333EA",
				}}
			/>
		</Flex>
	);
}
