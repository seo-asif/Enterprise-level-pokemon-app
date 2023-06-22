import { userPokemonsType } from "../utils/Type";
import { FaPlus } from "react-icons/fa";

const CompareContainer = ({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) => {
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3>Add Pokemon to Comparison</h3>
        </div>
      )}
      {pokemon && <div className="compare-element"></div>}
    </div>
  );
};

export default CompareContainer;
