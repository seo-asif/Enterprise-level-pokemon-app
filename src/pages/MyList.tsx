import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import Wrapper from "../sections/Wrapper";

const MyList = () => {
  const { userInfo } = useAppSelector(({ app }) => app);
  return (
    <div className="list">
      <Login />
    </div>
  );
};

export default Wrapper(MyList);
