import { Button } from '@mui/material';
import './MiddleFooter.scss';
import EastIcon from '@mui/icons-material/East';
import { useContext } from 'react';
import { PageStepContext } from '../../../Context/PageStepContext';

const MiddleFooter = () => {
    const {updatePageStep} = useContext(PageStepContext);
    
    const handleClick = () => {
        updatePageStep(1);
    }

    return (
        <div className="middle-footer">
            <Button variant='contained' endIcon={<EastIcon />} onClick={handleClick}>
                امتحان مجدد
            </Button>
        </div>
    );
}

export default MiddleFooter;