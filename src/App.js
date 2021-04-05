import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "YELL":
      return { message: `Hey! I just said ${state.message}` };
    case "WHISPER":
      return { message: `Excuse me! I just said ${state.message}` };
  }
}

const initialState = { message: "hi" };
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Message: {state.message}</p>
      <button
        onClick={() => {
          dispatch({ type: "YELL" });
        }}
      >
        YELL
      </button>
      <button
        onClick={() => {
          dispatch({ type: "WHISPER" });
        }}
      >
        WHISPER
      </button>
    </>
  );
}
