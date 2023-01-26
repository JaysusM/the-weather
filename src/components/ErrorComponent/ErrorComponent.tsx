import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ErrorComponent.scss';

const ErrorComponent = ({ message }: ErrorComponentProps) => {

    return <div className='error-wrapper'>
        <h3>Something wrong happened</h3>
        <FontAwesomeIcon icon={ faFaceSadTear } />
        { message && <p>Error:  { message }</p> }
    </div>;
}

type ErrorComponentProps = {
    message: string | undefined
}

export default ErrorComponent;