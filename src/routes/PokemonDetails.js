import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [params.name]);

  if (!pokemon) {
    return <>loading...</>;
  }

  return (
    <section style={{height: "80vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

    <Container style={{ width: "80%"}}>
      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div style={{ width: "30%" }}>
          <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${params.name}.jpg`} />
        </div>

        <div style={{ width: "68%" }}>
          <h1 style={{ textTransform: 'uppercase', marginTop: "10px", marginBottom: "20px" }} >{params.name}</h1>
          <div style={{ display: "flex", justifyContent: 'space-between', width: '200px', marginBottom: "30px" }}>
            <p>Height: {pokemon.height}</p> <p>Weight: {pokemon.weight}</p>
          </div>

          <Container style={{ display: 'flex', justifyContent: 'space-around', width: "100%" }}>
            <div style={{ display: 'flex' }}>
              <p>Abilities:</p><br></br>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>
                    <span>{ability.ability.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex' }}>
              <p>Types:</p><br></br>
              <ul>
                {pokemon.types.map((type) => (
                  <li key={type.type.name}>
                    <span>{type.type.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>

          <div>
            <p>Stats:</p>
            <ul style={{display: "flex", flexWrap: "wrap", listStyle: "none", justifyContent: 'space-between'}}>
              {pokemon.stats.map((stat) => (
                <li style={{display: "flex"}} key={stat.stat.name}>
                  <span>{stat.stat.name}: </span>
                  <span>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Container>

    </section>
  );
}

export { PokemonDetails };
