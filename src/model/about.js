import React from 'react';
import '../view/css/style.css'

import Empresa from '../view/img/empresa.jpg' 
import Trabalho from '../view/img/trabalho.jpg' 

const About = props => {
    return( 
    
        <div>
            <div id='about' className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>About Company Page</h2><br/>
                        <h4 className='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                        <p className='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>
                    <div className='col-sm-4'>
                     <img className='img' src={Empresa}/>
                    </div>
                </div>
            </div>
            <br/>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img className='img' src={Trabalho}/>
                    </div>
                    <div className='col-sm-8'>
                    <h2>Our Values</h2><br/>
                    <h4 className='justify'><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                    <p className='justify'><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default About;