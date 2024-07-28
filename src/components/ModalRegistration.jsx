import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginIn from './LoginIn';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor:'transprent',
  borderRadius:'8px',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  color:'#fff'
};

const ModalRegistration = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <Button  className='iconBtn' style={{color:'#fff'}}
      onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
         <LoginIn />
        </Box> 
      </Modal>
    </div>
  );
}
export default ModalRegistration;