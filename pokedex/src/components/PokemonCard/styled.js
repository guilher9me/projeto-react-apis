import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid purple;
  width: 30vw;
  height: 29vh;
  display: flex;
  align-items: end;
`;

export const CardBox = styled.div`
  width: 29.9vw;
  height: 23vh;
  background-color: #bf9762;
  border-radius: 0.6vw;
  display: flex;
  justify-content: space-between;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InfoBoxAndType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
`;

export const IdPokemon = styled.p`
  font-size: 0.8vw;
`;

export const PokemonName = styled.p`
  font-size: 1.6vw;
`;

export const TypeImage = styled.img`
  width: 4.2vw;
`;

export const DetailButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 0.8vw;
  cursor: pointer;
`;

export const CaptureButton = styled.button`
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  width: 7.6vw;
  height: 4.2vh;
  background-color: #ffffff;
  border-radius: 0.4vw;
  cursor: pointer;
`;
