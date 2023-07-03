import { Button, Center, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { poke } from "../../Api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const PokemonListPage = () => {
  const [pokedata, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [previous, setPrevious] = useState(true);
  const [next, setNext] = useState(true);
  useEffect(() => {
    poke
      .get("pokemon", {
        params: {
          limit: 30,
          offset: page * 30,
        },
      })
      .then((response) => {
        setPrevious(response.data.previous);
        setNext(response.data.next);
        Promise.all(
          response.data.results.map((result) => poke.get(result.url))
        ).then((resp) => {
          setPokeData(resp.map((pokemon) => pokemon.data));
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  if (loading) {
    return <p>CARREGANDO</p>;
  }

  return (
    <>
      {loading ? (
        ""
      ) : (
        <>
          <Grid templateColumns={"repeat(3,1fr)"} justifyItems={"center"}>
            {pokedata.map((pokemon) => {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
          </Grid>
          <Flex
            display={"flex"}
            justifyContent={"center"}
            marginTop={"2vw"}
            marginBottom={"1vw"}
            gap={"1vh"}
          >
            <Button
              hidden={!previous}
              previous={previous}
              onClick={() => setPage(page - 1)}
            >
              Anterior
            </Button>
            <Button hidden={!next} onClick={() => setPage(page + 1)}>
              Próximo
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

export default PokemonListPage;
