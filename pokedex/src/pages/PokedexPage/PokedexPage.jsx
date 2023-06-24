import { Box, Grid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../Context/GlobalContext";

const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext);
  return (
    <Box>
      <Text
        fontSize={"3rem"}
        fontFamily={"Poppins"}
        top={"13.75rem"}
        left={"2.5rem"}
        color={"white"}
        fontWeight={700}
      >
        Meus Pokémons
      </Text>
      <Grid templateColumns={"repeat(3,1fr)"} justifyItems={"center"}>
        {pokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </Grid>
    </Box>
  );
};

export default PokedexPage;
