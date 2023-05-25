import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dailogbox = () => {
    let history = useNavigate()
const [open, setOpen] = React.useState(true);





const handleClose = () => {
	setOpen();
    history('/home')
};

return (
	<div>
         <button onClick={() => history(-1) }  style={{float:'center'}}>Back</button>
	
	<Dialog open={open}  onClose={handleClose} >
		<DialogTitle>
		Are You Sure!
		</DialogTitle>

		
	
		<DialogActions>
		<Button onClick={handleClose} variant="danger" color="primary">
		YES
		</Button>
		</DialogActions>
	</Dialog>
	</div>
);
}

export default Dailogbox;
