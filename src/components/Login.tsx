import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/FirebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAppDispatch } from "../app/hooks";
import { setUserStatus } from "../app/slices/AppSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);
    if (email) {
      const fireStoreQuery = query(usersRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(fireStoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(collection(firebaseDB, "users"), {
          uid,
          email,
        });
      }
      dispatch(setUserStatus({ email }));
    }
  };
  return (
    <div className="login">
      <button className="login-btn" onClick={handleLogin}>
        <FcGoogle />
        Login With Google
      </button>
    </div>
  );
};

export default Login;
