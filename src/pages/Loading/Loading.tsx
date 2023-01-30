import LoadingSpinner from '../../components/utils/LoadingSpinner/LoadingSpinner';
import './Loading.scss';

const Loading = () => {
    return <div className='loading-page'>
        <LoadingSpinner />
    </div>;
}

export default Loading;