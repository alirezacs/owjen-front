import './Model.scss';
import ModelBody from './ModelBody/ModelBody';
import ModelFooter from './ModelFooter/ModelFooter';
import ModelHeader from './ModelHeader/ModelHeader';

const Model = () => {
    return (
        <div className="model">
            <ModelHeader />
            <ModelBody />
            <ModelFooter />
        </div>
    );
}

export default Model;