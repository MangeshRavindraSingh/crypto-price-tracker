import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { showModal, hideModal } from "../redux/showModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSymbol } from "../redux/symbolSlice";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "secondary.light",
  color:"white",
  boxShadow: 24,
  p: 4,
  borderRadius:"8px"
};

export default function SelectCryptoModal() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(showModal());
  const handleClose = () => dispatch(hideModal());
  const visibleModal = useSelector((state: RootState) => state.showModal.show);

  const handleSymbolChange = () => {
    dispatch(setSymbol(inputValue));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Change Symbol</Button>
      <Modal
        open={visibleModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Change Symbol
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              p:"20px",
              backgroundColor:"white",
              borderRadius:"8px",
              marginTop:"5px"
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Enter Symbol"
              variant="outlined"
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
            />
            
            <Button variant="outlined" onClick={handleSymbolChange}>Submit</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
