import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Box.scss';

const Box = ({ title, value, icon }: BoxProps) => {

    return <div className='box-container'>
        { icon && <FontAwesomeIcon icon={icon} />}
        <div className='box-value'>
            <p>{ title }</p>
            <b>{ value }</b>
        </div>
    </div>

}

type BoxProps = {
    title: string,
    value: string | number,
    icon?: IconProp
}

export default Box;