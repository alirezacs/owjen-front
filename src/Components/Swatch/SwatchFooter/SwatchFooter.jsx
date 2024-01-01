import { Button } from '@mui/material';
import './SwatchFooter.scss';
import EastIcon from '@mui/icons-material/East';
import { useContext } from 'react';
import { PageStepContext } from '../../../Context/PageStepContext';

const SwatchFooter = () => {
    const {updatePageStep} = useContext(PageStepContext);

    const handleClick = () => {
        updatePageStep(2);
    }

    return (
        <div className="swatch-footer">
            <Button variant='contained' endIcon={<EastIcon />} onClick={handleClick}>
                مرحله بعد
            </Button>
        </div>
    );
}

export default SwatchFooter;