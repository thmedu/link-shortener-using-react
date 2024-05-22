import './menu.css';
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'; // Corrigido os nomes das classes de ícones
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' href="https://www.linkedin.com/">
                <IoLogoLinkedin color='#fff' fontSize={24} />
            </a>
            <a className='social' href="https://www.instagram.com/">
                <IoLogoInstagram color='#fff' fontSize={24} /> 
            </a>

            <Link to="/links" className='menu-item'>Links Gerados</Link>
        </div>
    );
}
