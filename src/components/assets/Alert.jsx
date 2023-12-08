import { useState } from 'react'
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
/* import {
  warningStyle,
  infoStyle,
  errorStyle,
  successStyle,
  defaultStyle
} from './AlertStyles' */


export default function Alert(props) {

  const [open, setOpen] = useState(true);

  // let alertStyle = defaultStyle;
  const type = props.type;
  const title = props.title;
  const msg = props.msg;

  /* switch (type) {
    case 'warning': alertStyle = warningStyle; break;
    case 'info': alertStyle = infoStyle; break;
    case 'error': alertStyle = errorStyle; break;
    case 'success': alertStyle = successStyle; break;
    default:
      alertStyle = defaultStyle;
      break;
  } */

  // return (<><p style={alertStyle}>{msg}</p></>)
  return (
    <>
      { 
        open && 
        <MuiAlert 
          severity={type}
          onClose={() => { setOpen(false) }}
          >
          <AlertTitle>{title}</AlertTitle>
          {msg}
        </MuiAlert>
      }
    </>
  )

}

// <p className=".classe" />