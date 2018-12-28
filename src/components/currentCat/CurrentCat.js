import React,{Component} from 'react';

class CurrentCat extends Component {
    constructor(props){
        super(props);
        this.counter = 0;
        this.incrementCounter = this.incrementCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }
    incrementCounter(){
        this.resetCounter();
        this.counter = this.counter +1;
        this.props.cats[this.props.currentIndex].clickCount = this.counter;
        this.forceUpdate();
    }
    resetCounter(){
        this.counter = this.props.cats[this.props.currentIndex].clickCount;     
    }
    render(){
        const {cats,currentIndex} = this.props;
        return (            
                <div>
                    <h2>{cats[currentIndex].name}</h2>
                    <p className='cat__count'><strong>{cats[currentIndex].clickCount}</strong></p>
                    <img src={require(`../../assets/${cats[currentIndex].imgSrc}`)} alt='cat'
                     className='shadow-lg img-fluid border border-dark rounded'  onClick={this.incrementCounter}  />
                </div>
        )
    }
}

export default CurrentCat;