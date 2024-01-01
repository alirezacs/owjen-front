import './Swatch.scss';
import SwatchBody from './SwatchBody/SwatchBody';
import SwatchFooter from './SwatchFooter/SwatchFooter';
import SwatchHeader from './SwatchHeader/SwatchHeader';

const Swatch = () => {
    return (
        <div className="swatch">
            <SwatchHeader />
            <SwatchBody />
            <SwatchFooter />
        </div>
    );
}

export default Swatch;