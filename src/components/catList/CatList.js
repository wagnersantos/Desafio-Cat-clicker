import React,{Component} from 'react';

class CatView extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e,index){
		e.preventDefault();
		this.props.updateCat(index);
	}
    render() {
        return (
        	<div className='row' style={{marginBottom:40}}>
				<div className='col-sm-12 col-md-5 col-lg-5'>
					<ul className='list-group shadow-lg' style={{cursor:'pointer'}}>
						{
							this.props.cats.map((cat,index) => 
								<li key={index} onClick={(e) => this.handleClick(e,index)} 
									className={index === 0 ? 
										('list-group-item list-group-item-light active')
									:(index % 2 !== 0) ? ('list-group-item list-group-item-dark'):
									('list-group-item list-group-item-light')}>
										<strong>{cat.name}</strong>
								</li>
							)
						}
					</ul>
				</div>
			</div>
        );
    }
}

export default CatView;