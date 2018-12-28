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
        	<div>
				<CatList cats={Cats} updateCat={this.updateCat} />
				<CurrentCat cats={Cats} currentIndex={this.state.currentIndex} />
			</div>
        );
    }
}

export default CatView;