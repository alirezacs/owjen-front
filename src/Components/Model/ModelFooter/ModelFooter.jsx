import { Avatar, Button, IconButton } from '@mui/material';
import './ModelFooter.scss';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EastIcon from '@mui/icons-material/East';
import { useContext } from 'react';
import { PageStepContext } from '../../../Context/PageStepContext';

const ModelFooter = () => {
    const {updatePageStep} = useContext(PageStepContext);
    
    const handleClick = () => {
        updatePageStep(3);
    }

    return (
        <div className="model-footer">
            <IconButton sx={{ bgcolor: '#fff' }}>
                <CameraAltIcon sx={{ color: '#333' }} />
            </IconButton>
            <span>
            این رنگ رو روی چهره خودتان ببینید
            </span>
            <Button variant='contained' endIcon={<EastIcon />} sx={{ marginTop: '2rem' }} onClick={handleClick}>
                دیدن نتیجه
            </Button>
        </div>
    );
}

export default ModelFooter;