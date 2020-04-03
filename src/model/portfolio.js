import React from 'react';
import {Carousel} from 'react-bootstrap'
import '../view/css/style.css';
import Paris from '../view/img/paris.jpg';
import Nova from '../view/img/nova.jpg';
import San from '../view/img/san.jpg';


const Portfolio = props => {
    return( 
    
         
         <div id='portfolio' className='container-fluid text-center bg-grey'> 
            <h2>Portfolio</h2><br/>
            <h4>What we have created</h4>
            <div className='row text-center '>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                    <img className='img' src={Paris}/>
                    <p><strong>Paris</strong></p>
                    <p>Yes, we built Paris</p>
                </div>
                </div>
            <div className='col-sm-4'>
                <div className='thumbnail'>
                <img className='img' src={Nova}/>
                 <p><strong>New York</strong></p>
                 <p>We built New York</p>
                </div>
            </div>
                <div className='col-sm-4'>
                    <div className='thumbnail'>
                        <img className='img' src={San}/>
                        <p><strong>San Francisco</strong></p>
                        <p>Yes, San Fran is ours</p>
                    </div>
                </div>
            </div><br/>
            <h2>What our customers say</h2>
            <Carousel>
                <Carousel.Item>
                    <h4>'This company is the best. I am so happy with the result!'<br/><span>Michael Roe, Vice President, Comment Box</span><br/></h4>
                   
                </Carousel.Item>
                <Carousel.Item>
                    <h4>'One word... WOW!!'<br/><span>John Doe, Salesman, Rep Inc</span><br/></h4> 
                                      
                </Carousel.Item>
                <Carousel.Item>
                   <h4>'Could I... BE any more happy with this company?'<br/><span>Chandler Bing, Actor, FriendsAlot</span><br/></h4>
                    
                </Carousel.Item>
            </Carousel>


        </div>
                   
    
    )
}
export default Portfolio;