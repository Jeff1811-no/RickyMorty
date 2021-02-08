
const ramQuotes = async()=>{

        const url=`https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/`

        const response = await fetch(url);
        const data = await response.json();
       
    return data;
}
export default ramQuotes;