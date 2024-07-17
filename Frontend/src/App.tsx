import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPrices } from "./redux/priceSlice";
import PriceTable from "./components/PriceTable";
import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import SelectCryptoModal from "./components/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { Box, Typography } from "@mui/material";

const App: React.FC = () => {
  const symbol = useSelector((state: RootState) => state.symbol.symbol);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPrices(symbol));
    const interval = setInterval(() => {
      dispatch(fetchPrices(symbol));
    }, 5000);

    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <Typography variant="h5">Crypto Price Tracker</Typography>
        <Box
          sx={{
            p: "20px",
            backgroundColor: "secondary.light",
            borderRadius: "8px",
            marginTop: "5px",
          }}
        >
          <PriceTable />
        </Box>
        <br />
        <SelectCryptoModal />
      </div>
    </PersistGate>
  );
};

export default App;
