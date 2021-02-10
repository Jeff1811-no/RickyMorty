
const ramQuotes = async()=>{

        const url=`https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/`

        const response = await fetch(url);
        const data = await response.json();
       
        //data.sort(()=>Math.random()-0.5)
    var irl=data[0].img.toString()
      irl=irl.substring(94)
       console.log(irl)
       return data;
}
export default ramQuotes;