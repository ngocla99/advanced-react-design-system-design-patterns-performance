import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action.");
  }
}

type StateContextType = {
  count: number;
};

type DispatchContextType = Dispatch<Action>;

export const StateContext = createContext<StateContextType | null>(null);
export const DispatchContext = createContext<DispatchContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export function useCartStateContext() {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}

export function useCartDispatchContext() {
  const value = useContext(DispatchContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}
