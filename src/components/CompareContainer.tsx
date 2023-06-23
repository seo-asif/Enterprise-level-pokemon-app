import {
  pokemonStatType,
  pokemonTypeInterface,
  userPokemonsType,
} from "../utils/Type";
import { FaPlus } from "react-icons/fa";
import { pokemonTypes } from "../utils/getPokemonTypes";
import { useDispatch } from "react-redux";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { Link, useNavigate } from "react-router-dom";

const CompareContainer = ({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createStatsArray = (
    types: pokemonTypeInterface[],
    statType: pokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypeInterface) => {
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat: string) => {
        if (!statsSet.has(stat)) {
          //@ts-ignore
          statsArray.push({ name: stat, image: pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };

  const getStats = () => {
    return (
      <>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Strength</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "strength").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Weakness</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "weakness").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Resistance</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "resistance").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Vulnerable</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "vulnerable").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Strength</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "strength").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <Link to="/search" className="empty-button">
            <FaPlus />
          </Link>
          <h3>Add Pokemon to Comparison</h3>
        </div>
      )}
      {pokemon && (
        <div className="compare-element">
          <div className="compare-info">
            <div className="compare-details">
              <h3>{pokemon?.name}</h3>
              <img
                src={pokemon?.image}
                alt="pokemon"
                className="compare-image"
              />
            </div>
            <div className="pokemon-types-container">
              <div className="pokemon-types">
                <h4 className="pokemon-type-title">Type</h4>
                <div className="pokemon-type-icons">
                  {pokemon?.types.map(
                    (type: pokemonTypeInterface, index: any) => {
                      const keys = Object.keys(type);

                      return (
                        <div className="pokemon-type" key={index}>
                          <img
                            src={type[keys[0]].image}
                            alt="pokemon type"
                            className="pokemon-type-image"
                            loading="lazy"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="compare-action-buttons">
            <button className="compare-btn">Add</button>
            <button
              className="compare-btn"
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            >
              View
            </button>
            <button
              className="compare-btn"
              onClick={() => {
                dispatch(removeFromCompare({ id: pokemon.id }));
              }}
            >
              remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareContainer;
