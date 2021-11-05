import { useState, useEffect, useReducer } from "react";


const reducer = (state, action) => {
  switch (action) {
    case "Tang":
      return state + 1;
    case "Giam":
      return state - 1;
    case "Xoa_Het":
      return 0;
    default:
      return state;
  }
};

const reducer2 = (state2, action) => {
  switch (action.type) {
    case "LAY_GIA_TRI":
      return action.data;
    default:
      return state2;
  }
};

export default function Demo_UseEffect() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scrollPostion, setScrollPostion] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  const [state2, dispatch2] = useReducer(reducer2, 0);

  useEffect(() => {
    console.log("3");
    return () => {
      console.log("cleanup");
    };
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({ res }))
      .catch((err) => console(err));
  }, [action]);

  const windowScrollY = () => {
    setScrollPostion(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", windowScrollY);
    return () => {
      document.removeEventListener("scroll", windowScrollY);
    };
  }, [scrollPostion]);

  useEffect(() => {
    const clickWindow = () => console.log("1");
    window.addEventListener("click", clickWindow);

    // return 1 function, sẽ được gọi ngay trước khi componentWillUnmount
    return () => {
      window.removeEventListener("click", clickWindow);
    };
  }, []);

  console.log("1");
  return (
    <>
      <div className="demo_useeffect">
        <p style={{ paddingBottom: "30px" }}>Demo useEffect</p>
        <p>{count}</p>
        {console.log("2")}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>

        <button onClick={() => setAction("users")}>Get users</button>
        <button onClick={() => setAction("comment")}>Get comment</button>

        <p className="srcollY">{scrollPostion}</p>

        <h1 style={{ paddingTop: "30px" }}>UseReducer</h1>

        <p>State: {state}</p>
        <button onClick={() => dispatch("Tang")}>Tang</button>
        <button onClick={() => dispatch("Giam")}>Giam</button>
        <button onClick={() => dispatch("Xoa_Het")}>Xoa het</button>

        <h1 style={{ paddingTop: "30px" }}>UseReducer2</h1>

        <p>State2: {state2}</p>
        <button
          onClick={() =>
            dispatch2({
              type: "LAY_GIA_TRI",
              data: 10,
            })
          }
        >
          LAY GIA TRI
        </button>
      </div>
    </>
  );
}
