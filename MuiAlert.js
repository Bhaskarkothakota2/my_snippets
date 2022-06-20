import { Alert, Stack,  Collapse } from "@mui/material";
import { useEffect, useState } from "react";

function MuiAlert(props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setOpen(false);
    }, 3000);
  }, []);
  
  return (
   
      <Stack spacing={2} alignItems="center">
        <Collapse in={open}>
          <Alert
            severity="warning"
            variant="outlined"
            onClose={() => setOpen(false)}
            close
          >
            {props.message}
          </Alert>
        </Collapse>
      </Stack>
   
  );
}

export default MuiAlert;
