import React from 'react';
import '../view/css/style.css'

const Footer = props => {
    return( 
    
        <footer className='container-fluid text-center bg-blue'>
        <a href='#newsletters' title='To Top'>
            <span className='glyphicon glyphicon-chevron-up'></span>
        </a>
        <p> Site Produced by Cláudio Filipe Lima Raposo <a href='engcfraposo@gmail.com' title='Send me a mail'>Cotact me</a></p>
        <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>
    
    )
}
export default Footer;