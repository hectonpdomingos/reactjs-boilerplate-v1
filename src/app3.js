console.log("App.js is running");

const app = {
    title: 'Indecision App!',
    subtitle: 'Indecision App!',
    options: []
}

//form submit
const onFormSubmit = (e) => {
    //preventing refresh 
    e.preventDefault();


    //get data from the form
    const option = e.target.elements.option.value;
    //if there is data comming from...
    if(option){
        //push the data to the options array
        app.options.push(option);
        //after that clean the input element 
        e.target.elements.option.value = '';


        //render form function
        renderForm();
    }


}


const removeItens = () => {
    //for (let i = 0; i <= app.options.length; i++){
    //   app.options.splice(i);
    //}

    app.options = [];

    console.log("Removed all itens");
    renderForm();
}

const appRoot = document.getElementById('app');


let qtItem = 0;


const onMakeDecision = () => {
    const randomNum =  Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderForm = () => {

    //JSX - JavaScript XML
    const template = (
    <div id='template'>
    
    <h1>{app.title}</h1>
    
    {(app.subtitle) && <p>{app.subtitle}</p>}
    {(app.options.length > 0) && <p>Here are your options - {app.options.map((item) => item + ', ')}</p> }
    <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
    Numbers of items: {app.options.length}
    <ol>
       {
           app.options.map((item) =>{
               return <li key={qtItem++}>{item}</li>
           })
       }
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add item</button>
    </form>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeItens}>Remove All</button>
    </div>
    );

    ReactDOM.render(template, appRoot);
}

renderForm();