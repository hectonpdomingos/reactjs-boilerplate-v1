console.log("App.js is running");

const app = {
    title: 'Indecision App!',
    subtitle: 'Indecision App!',
    options: ['One ', 'Two']
}
//JSX - JavaScript XML
const template = (
<div id='template'>

<h1>{app.title}</h1>

{(app.subtitle) && <p>{app.subtitle}</p>}
{(app.options.length > 0) && <p>Here are your options - {app.options}</p> }
<p>{app.options.length > 0 ? 'Here are your options: ' : 'NO options'}</p>

<ol>
    <li>Item 1</li>
    <li>Item 2</li>
</ol>
</div>
);

let count = 0;
const addOne = () => {
    console.log(count += 1)
};

const minusOne = () => {
    //count -= 1;
    console.log(count -= 1)
};

const reset = () => {
    console.log('reset the count');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(
    [template,
     templateTwo], 
     appRoot);