import Image from "next/image";
import { Container, Flex, Heading, Text, Button } from "@radix-ui/themes";

export default function ScalePage() {
  return (
    <Container size="1" className="p-10">
      <Flex direction="column" gap="2">
        <Heading size="7">Scale Page</Heading>
        <Text size="3" mb="1em">
          This is the space page. It is a place where you can find information about the scale of the universe.
        </Text>
        <Image
          src="/scale.jpg"
          alt="Geist UI Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <Button size="1" radius="full">Get Started</Button>
      </Flex>
    </Container >
  );
}
