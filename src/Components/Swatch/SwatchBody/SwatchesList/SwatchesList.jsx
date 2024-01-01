import { Grid, ToggleButton } from '@mui/material';
import './SwatchesList.scss';
import EastIcon from '@mui/icons-material/East';
import { useContext } from 'react';
import { SelectedSwatchContext } from '../../../../Context/SelectedSwatchContext';

const SwatchesList = ({title, swatches}) => {
    const {selectedSwatch, updateSelectedSwatch} = useContext(SelectedSwatchContext);

    const handleClick = (swatch) => {
        updateSelectedSwatch(swatch);
    }

    return (
        <div className="swatch-list">
            <div className="swatch-title">
                <span>{title}</span>
                <EastIcon />
            </div>
            <div className="swatches-list">
                <Grid container rowSpacing={2}>
                    {swatches.map((swatch, i) => {
                        return (
                            <Grid item xs={6} md={4} key={i}>
                                <ToggleButton value='' selected={swatch.id === selectedSwatch.id} onClick={() => {handleClick(swatch)}}>
                                    <div className="swatch-item">
                                        <img src={'http://localhost:80/api/file/' + swatch.image} alt="" />
                                    </div>
                                </ToggleButton>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    );
}

export default SwatchesList;