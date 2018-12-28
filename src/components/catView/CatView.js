import React,{Component} from 'react';
import Cats from '../../services/cats/Cats';
import CatList from '../catList/CatList';
import CurrentCat from '../currentCat/CurrentCat';

class CatView extends Component {

    render() {
        return (
        	<div>
				<CatList cats={Cats} />
				<CurrentCat cats={Cats} />
			</div>
        );
    }
}

export default CatView;