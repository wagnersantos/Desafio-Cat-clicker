import React, {Component} from 'react';

class CatView extends Component {

    render() {
    	const {cats,currentIndex} = this.props;
        return (
        	<div className='cat'>
				<h2>{cats[currentIndex].name}</h2>
				<p className='cat__count'><strong>{cats[currentIndex].clickCount}</strong></p>
				<img src={require(`../../assets/${cats[currentIndex].imgSrc}`)} alt='cat' />
			</div>
        );
    }
}

export default CatView;