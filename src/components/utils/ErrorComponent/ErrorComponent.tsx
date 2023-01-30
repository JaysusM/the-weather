import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../ui/Card/Card';
import './ErrorComponent.scss';

const ErrorComponent = ({ message }: ErrorComponentProps) => {

    return <Card className="error-card">
        <h3>Something wrong happened</h3>
        <FontAwesomeIcon icon={ faFaceSadTear } />
        { message && <p>Error:  { message }</p> }
    </Card>;
}

type ErrorComponentProps = {
    message: string | undefined
}

export default ErrorComponent;