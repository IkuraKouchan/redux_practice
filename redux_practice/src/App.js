import { useDispatch, useSelector } from "react-redux";
import { decremet, incremet, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Hello Redux</h1>
        <h3>count:{counter}</h3>
        <button onClick={() => dispatch(incremet(2))}>+</button>
        <button onClick={() => dispatch(decremet())}>-</button>
        {isLogin ? <h3>success login</h3> : <h3>fail login</h3>}
        <button onClick={() => dispatch(login())}>Login</button>
      </div>
    </>
  );
}

export default App;
