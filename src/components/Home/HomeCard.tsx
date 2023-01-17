import {
  Text,
  Stack,
  Heading,
  Image,
  CardBody,
  Card,
  Center,
  CardFooter,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";

import forest from "../../assets/imgs/home-forest.png";
import "./style.css";
export function HomeCard() {
  return (
    <Card
      backdropFilter="auto"
      backdropBlur="40px"
      ml="2%"
      mr="2%"
      border="1px"
      borderStartRadius="20px"
      borderEndRadius="20px"
      overflow="hidden"
      variant="outline"
      align="center"
    >
      <Flex>
        <div className="forest_img">
          <Image objectFit="cover" src={forest} />
        </div>

        <div className="text_btn">
          <CardBody>
            <Text
              color="white"
              fontSize="3rem"
              className="text"
              mt="10"
              ml="10"
            >
              Cuidar, educar, <br />
              conscientizar e somar. <br />
              Ajudando você a <br />
              preservar a natureza.
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              colorScheme="green"
              color='black'
              bg="white"
              ml="70%"
              mt="20"
              className="btn"
            >
              Entenda mais
            </Button>
          </CardFooter>
        </div>
      </Flex>
    </Card>
  );
}
