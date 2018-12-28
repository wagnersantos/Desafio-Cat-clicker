import React,{Component} from 'react';
import Cats from '../../services/cats/Cats';
import CatList from '../catList/CatList';
import CurrentCat from '../currentCat/CurrentCat';

class CatView extends Component {
	constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
        }

        this.updateCat = this.updateCat.bind(this); 
    }
    updateCat(index){
        this.setState({currentIndex: index});
    }
    render() {
        return (
        	<div className='container d-flex flex-column align-items-center' >
                <div className='jumbotron' style={{paddingTop: 64}}>
                    <h1 className='position-absolute' 
                        style={{top: 0,left:0,right:0,textAlign:'center'}}>Cat Clicker</h1>
                    <CatList cats={Cats} updateCat={this.updateCat} />
                    <CurrentCat cats={Cats} currentIndex={this.state.currentIndex} />
                </div>
             </div>
        );
    }
}

export default CatView;