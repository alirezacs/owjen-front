import './MiddleBody.scss';
import { useContext } from 'react';
import { SelectedSwatchContext } from '../../../Context/SelectedSwatchContext';
import { SelectedModelContext } from '../../../Context/SelectedModelContext';

const MiddleBody = () => {
    const {selectedModel} = useContext(SelectedModelContext);

    return (
        <div className="middle-body">
            <div className="middle-box">
                <img src={'http://localhost:80/api/file/' + selectedModel} alt="Swatch Model" />
            </div>
        </div>
    );
}

export default MiddleBody;