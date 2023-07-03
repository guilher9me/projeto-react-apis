import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../pages/PokemonsListPage/PokemonListPage";

export function RouterPage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:id" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
