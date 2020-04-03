import React from 'react';
import '../view/css/style.css'

const Newsletters = props => {
    return( 
    
        <div id='newsletters' className='jumbotronnews text-center'>
            <span className='glyphicon glyphicon-globe logo '></span>
            <span className='glyphicon glyphicon-signal logo'></span>
            <h1>LRaposo S/A</h1> 
            <p>We specialize in FullStack development</p> 
            <form>
                <div className='input-group'>
                <input type='email' className='form-control' size='50' placeholder='Email Address' required/>
                    <div className='input-group-btn'>
                        <button type='button' className='btn btn-danger'>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    
    )
}
export default Newsletters;