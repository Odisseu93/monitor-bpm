import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  IconButton,
  Select,
  Text,
  Container,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { FaHeartbeat } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function App() {
  const refInpGender = React.useRef<HTMLSelectElement | null>(null);
  const refInpAge = React.useRef<HTMLInputElement | null>(null);
  const [FCM, setFCM] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const gender = refInpGender.current?.value;
    const age = refInpAge.current?.value;
    const displayTime = 2000;

    if (gender === "Feminino") setFCM(226 - Number(age));
    if (gender === "Masculino") setFCM(220 - Number(age));

    setTimeout(() => {
      setFCM(0);
    }, displayTime);
  };

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Container className="container" zIndex={-1} position="absolute">
        <Image className="app-bg" src="/src/assets/Realistic-Red-Heart.svg" />{" "}
      </Container>
      <Heading className="title" textAlign="center" color="tomato">
        Frequência cardíaca Máxima (FCM)
      </Heading>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <FormControl className="inp-number-gender" marginY="1rem">
          <FormLabel>Qual é o seu sexo?</FormLabel>
          <Select
            ref={refInpGender}
            onChange={() => console.log(refInpGender.current?.value)}
            required
          >
            <option value=""></option>
            <option>Feminino</option>
            <option>Masculino</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Digite a sua idade</FormLabel>
          <Input
            className="inp-number-age"
            min="1"
            max="150"
            type="number"
            ref={refInpAge}
            size="sm"
            required
          />
        </FormControl>
        <IconButton
          className="btn-calcFCM"
          type="submit"
          aria-label="heartbeat calc"
          title="Clique aqui para calcular a sua FCM"
          icon={<FaHeartbeat className="heartBeat-icon" size="inherit" />}
          marginTop="1rem"
          color="tomato"
          border="5px solid tomato"
          _hover={{ border: "5px solid #D61355" }}
          _active={{
            border: "5px solid red",
          }}
          outline="none"
        />
        {FCM !== 0 ? (
          <Text className="FCM-result" fontSize="3rem">
            {FCM}
          </Text>
        ) : null}
      </form>
      <footer className="footer" >
      <Link href='https://github.com/Odisseu93' isExternal>
  Desenvolvido por Ulisses Silvério <BiLinkExternal size="1rem" />
</Link>
      </footer>
    </div>
  );
}

export default App;
