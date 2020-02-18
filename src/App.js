import React from 'react';
import hangman from './hangman/hangman_0.jpg';
import './hangman/hangman_1.jpj';
import './hangman/hangman_2.jpj';
import './hangman/hangman_3.jpj';
import './hangman/hangman_4.jpj';
import './hangman/hangman_5.jpj';
import './hangman/hangman_6.jpj';

// vue', 'angular', 'react', 'java', 'php', 'ruby', 'python',
//              'perl', 'lisp', 'javascript', 'visualbasic', 'pascal',
//              'assembly', 'swift', 'kotlin'
// 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
//             'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
//             'z', 'x', 'c', 'v', 'b', 'n', 'm'

class App extends React.Component{
  constructor(props){
  super(props)
    this.state={
      image: 0
      
    }
  }
  render(){


    return (
    <div className="App">

     <img src={hangman}></img>
      
      <form>
      <input type="button" value="q"></input>
      <input type="button" value="w"></input>
      <input type="button" value="e"></input>
      <input type="button" value="r"></input>
      <input type="button" value="t"></input>
      <input type="button" value="y"></input>
      <input type="button" value="t"></input>
      <input type="button" value="u"></input>
      <input type="button" value="i"></input>
      <input type="button" value="o"></input>
      <input type="button" value="p"></input>
      <input type="button" value="a"></input>
      <input type="button" value="s"></input>
      <input type="button" value="d"></input>
      <input type="button" value="f"></input>
      <input type="button" value="g"></input>
      <input type="button" value="h"></input>
      <input type="button" value="j"></input>
      <input type="button" value="k"></input>
      <input type="button" value="l"></input>
      <input type="button" value="z"></input>
      <input type="button" value="x"></input>
      <input type="button" value="c"></input>
      <input type="button" value="v"></input>
      <input type="button" value="b"></input>
      <input type="button" value="n"></input>
      <input type="button" value="m"></input>
      </form>
       
    </div>

    )

  }

}

export default App;


