import './Middle.scss';
import MiddleBody from './MiddleBody/MiddleBody';
import MiddleFooter from './MiddleFooter/MiddleFooter';
import MiddleHeader from './MiddleHeader/MiddleHeader';

const Middle = () => {
    return (
        <div className="middle">
            <MiddleHeader />
            <MiddleBody />
            <MiddleFooter />
        </div>
    );
}

export default Middle;