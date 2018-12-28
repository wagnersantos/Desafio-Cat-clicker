import React,{Component} from 'react';
import Cats from '../../services/cats/Cats';
import CatList from '../catList/CatList';

class CatView extends Component {

    render() {
        return (
        	<div>
				<CatList cats={Cats} />
			</div>
        );
    }
}

export default CatView;