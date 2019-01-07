const isAdult = (age) => {
    if(age >= 18){
        return 'You are adult';
    }else{
        return 'you are not adult';
    }
}



export { isAdult };