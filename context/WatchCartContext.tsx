import { createContext, useState, useEffect } from "react";
import { IMovieIdProps } from "../pages/components/movieId";

type WatchCartProviderProps = {
  children: React.ReactNode;
};

type watchCartContext = {
  cart: IMovieIdProps[];
  setCart: (curItems: IMovieIdProps[]) => void;
};

export const WatchCartContext = createContext({} as watchCartContext);

function WatchCartProvider({ children }: WatchCartProviderProps) {
  function getInitialState() {
    const cart = localStorage.getItem("watchList");
    return cart ? JSON.parse(cart) : [];
  }
  const [cart, setCart] = useState<IMovieIdProps[]>(getInitialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(cart));
  }, [cart]);
  return (
    <WatchCartContext.Provider value={{ cart, setCart }}>
      {children}
    </WatchCartContext.Provider>
  );
}
export default WatchCartProvider;
