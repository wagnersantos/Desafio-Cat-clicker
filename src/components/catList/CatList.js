import React,{Component} from 'react';

class CatView extends Component {

    render() {
        return (
        	<div>
	        	<ul>
					{
						this.props.cats.map((cat,index) => 
							<li key={index}>
								<strong>{cat.name}</strong>
							</li>
						)
					}
				</ul>
        	</div>
        );
    }
}

export default CatView;