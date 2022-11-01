import '../styles/link.css';

const Link =({value , path}) => {
    return  <a href={path} className='link'>{value}</a>
}

export default Link;