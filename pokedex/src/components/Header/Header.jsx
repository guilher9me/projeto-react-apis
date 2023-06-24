import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/LogoPokemon.svg";
import menor from "../../assets/Lower.svg";
import { GlobalContext } from "../../Context/GlobalContext";
import { GoToPokedexPage, GoToPokemonList } from "../../Router/Coordinator";
import { Container, HomeButton, Logo, PokedexButton } from "./styled";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokedex, addPokedex, removePokemon, pokemonGlobal } =
    useContext(GlobalContext);
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="5%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  function closeModal() {
    onClose();
    if (pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id)) {
      removePokemon(pokemon.id);
    }
  }
  return (
    <Container>
      {location.pathname !== "/" && (
        <HomeButton onClick={() => GoToPokemonList(navigate)}>
          <img src={menor} alt="" />
          <u>Todos Pokémons</u>
        </HomeButton>
      )}
      <Logo src={logo} alt="Logo Pokemon" />
      {location.pathname === "/" && (
        <PokedexButton onClick={() => GoToPokedexPage(navigate)}>
          Pokédex
        </PokedexButton>
      )}
      {location.pathname.includes("/details") &&
        (pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id) ? (
          <Button onClick={() => (onOpen(), removePokemon(pokemonGlobal.id))}>
            Excluir da Pokédex
          </Button>
        ) : (
          <Button onClick={() => (onOpen(), addPokedex(pokemonGlobal))}>
            Adicionar à Pokédex
          </Button>
        ))}
      <Modal isCentered isOpen={isOpen} onClose={closeModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            {!pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id)
              ? "Oh,no!"
              : "Gotcha!"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {!pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id)
                ? "O Pokémon foi removido da sua Pokédex"
                : "O Pokémon foi adicionado a sua Pokédex"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Header;
