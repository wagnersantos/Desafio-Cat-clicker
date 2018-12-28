import React,{Component} from 'react';

class CatView extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e,index){
		e.preventDefault();
		console.log(e.target.innerHTML);
	}
    render() {
        return (
        	<div>
	        	<ul>
					{
						this.props.cats.map((cat,index) => 
							<li key={index}
								onClick={(e) => this.handleClick(e,index)} >
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