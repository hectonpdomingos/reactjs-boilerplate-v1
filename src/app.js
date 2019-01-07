import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const courses = ['Java', 'Python', 'c++'];


const reactElementsArray = courses.map((data) => {
    return (
      <p>{data}</p>
    );
  });

  
ReactDOM.render(<p>This is a boilerplate</p>, document.getElementById('app'));
