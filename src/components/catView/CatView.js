import React,{Component} from 'react';
import Cats from '../../services/cats/Cats';

class CatView extends Component {

    render() {
        return (
        	<div>
        		{console.log(Cats)}
        	</div>
        );
    }
}

export default CatView;