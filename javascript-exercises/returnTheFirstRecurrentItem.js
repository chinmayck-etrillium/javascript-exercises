//Check if an element is recurring in an array, if repeating return the first recurring element else return undefined
const recurrentItem =(arr)=>{
    if(arr.length<2){
        return undefined;
    }
    const checkRecurrent = {}
    for(let i=0; i<arr.length; i++){
        if(!checkRecurrent[arr[i]]){
            checkRecurrent[arr[i]]=true;
        }
        else if(checkRecurrent[arr[i]]==true){
            return arr[i];
        }
    }
    return undefined;
}


console.log(recurrentItem([1,2,3,4,5,4]));