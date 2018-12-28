import React, {Component} from 'react';

class CatView extends Component {

    render() {
    	const {cats} = this.props;
        return (
        	<div className='cat'>
				<h2>{cats[0].name}</h2>
				<p className='cat__count'><strong>{cats[0].clickCount}</strong></p>
				<img src={require(`../../assets/${cats[0].imgSrc}`)} alt='cat' />
			</div>
        );
    }
}

export default CatView;