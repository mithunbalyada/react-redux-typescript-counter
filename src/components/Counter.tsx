import * as React from 'react';
import { Dispatch } from 'redux';
import {connect} from 'react-redux';
import { addToCounter, subtractFromCounter } from '../store/counter/actions';
import { IState } from '../store';

interface IMapStateToProps{
  counter: number
}

interface IMapDispatchToProps{
  addToCounter: (num: number) => void;
  subtractFromCounter: (num: number) => void
}

interface ICounterProps extends IMapStateToProps, IMapDispatchToProps{

}



const Counter: React.FC<ICounterProps> = ({counter, addToCounter, subtractFromCounter}) => {


   const add = (event:React.SyntheticEvent) =>{
     event.preventDefault();
     addToCounter(10);
   }

   const subtract = (event:React.SyntheticEvent) =>{
    event.preventDefault();
    subtractFromCounter(5);
  }


    return (
        <React.Fragment>
          <div className="jumbotron">
            <h1 className="display-4">React Counter</h1>
            <p className="lead">
                Counter: <span>{counter}</span>
            </p>
            <hr className="my-4" />
            
            <p className="lead">
              <a className="btn btn-primary btn-sm mr-4" href="/#" role="button" onClick={add}>Add 10+</a>
              <a className="btn btn-secondary btn-sm" href="/#" role="button" onClick={subtract}>Subtract 5-</a>
            </p>

            <p>
              Adds 10 to the counter and subtracts 5 from the counter. 
            </p>
          </div>
        </React.Fragment>
      );
}


const mapStateToProps = (state: IState):IMapStateToProps =>({counter: state.counter.counter});

const mapDispatchToProps = (dispatch:Dispatch): IMapDispatchToProps => ({
  addToCounter: (num: number) => dispatch(addToCounter(num)),
  subtractFromCounter: (num: number) => dispatch(subtractFromCounter(num))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);