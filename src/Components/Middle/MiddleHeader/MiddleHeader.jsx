import { useContext, useEffect } from 'react';
import { SelectedSwatchContext } from '../../../Context/SelectedSwatchContext';
import './MiddleHeader.scss';

const MiddleHeader = () => {
    const {selectedSwatch} = useContext(SelectedSwatchContext);

    return (
        <div className="middle-header">
            <div className="swatch-image">
                <img src={'http://localhost:80/api/file/' + selectedSwatch.image} alt={selectedSwatch.name} />
            </div>
            <div className="swatch-info">
                <span className='swatch-name'>{selectedSwatch.name}</span>
                <span className='swatch-shortname'>{selectedSwatch.shortName}</span>
            </div>
        </div>
    );
}

export default MiddleHeader;