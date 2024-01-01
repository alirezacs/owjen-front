import { useContext, useState } from 'react';
import './SwatchBody.scss';
import SwatchesList from './SwatchesList/SwatchesList';
import axios from 'axios';
import { LoadingContext } from '../../../Context/LoadingContext';
import { SelectedSwatchContext } from '../../../Context/SelectedSwatchContext';
import { SelectedModelContext } from '../../../Context/SelectedModelContext';

const SwatchBody = () => {
    const [swatches, setSwatches] = useState([]);
    const {updateLoading} = useContext(LoadingContext);
    const {updateSelectedSwatch} = useContext(SelectedSwatchContext);
    const {updateSelectedModel} = useContext(SelectedModelContext);

    const getSwatches = async () => {
        await axios.get('http://localhost:80/api/swatch').then((res) => {
            setSwatches(res.data);
            updateSelectedSwatch(res.data[0].swatches[0]);
            updateSelectedModel(res.data[0].swatches[0].models[0]);
        });
    }

    useState(() => {
        /* Get Swatches */
        getSwatches();
        /* Get Swatches */

        /* Select First */
        // updateSelectedSwatch(swatches[0]);
        /* Select First */

        /* Hide Loading */
        updateLoading(false);
        /* Hide Loading */
    }, []);

    

    return (
        <div className="swatch-body">
            {swatches.map((swatch, i) => {
                return (
                    <SwatchesList title={swatch.name} swatches={swatch.swatches} key={i} />
                )
            })}
        </div>
    );
}

export default SwatchBody;