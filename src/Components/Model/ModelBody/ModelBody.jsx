import './ModelBody.scss';
import { Button, Grid, ToggleButton } from '@mui/material';
import { useContext, useEffect } from 'react';
import { SelectedSwatchContext } from '../../../Context/SelectedSwatchContext';
import { SelectedModelContext } from '../../../Context/SelectedModelContext';

const ModelBody = () => {
    const {selectedSwatch} = useContext(SelectedSwatchContext);
    const {selectedModel, updateSelectedModel} = useContext(SelectedModelContext);

    const handleClick = (model) => {
        updateSelectedModel(model);
    }

    return (
        <div className="model-body">
            <Grid container rowSpacing={3} columnSpacing={5} justifyContent='center'>
                {selectedSwatch.models.map((model, i) => {
                    return (
                        <Grid item xs={6} md={6} key={i}>
                            <ToggleButton value='' selected={selectedModel === model} onClick={() => {handleClick(model)}}>
                                <div className="model-item">
                                    <img src={'http://localhost:80/api/file/' + model} alt={model} />
                                </div>
                            </ToggleButton>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default ModelBody;