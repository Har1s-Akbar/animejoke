import { useState, useEffect } from "react";

function Hero(){
    const [Data, setData] = useState([]);
    const [Loading, isLoading] = useState(true);
    const url = `https://anime-jokes.p.rapidapi.com/jokes/?page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
            'X-RapidAPI-Host': 'anime-jokes.p.rapidapi.com'
        }
    };
    const  fetchData = async()=>{
        isLoading(true)
        try{const response = await fetch(url, options);
            const data = await response.json();
            isLoading(false)
            setData(data)
        }
        catch (error) {
            console.error(error);
            isLoading(true)
        }
    }
    useEffect(()=>{fetchData()}, [])
    console.log(Data)
    return(
        
        <section className="w-5/6 m-auto">
            {
                Loading ? <div><h1 className="text-4xl text-center">Loading.....</h1></div>
                :<div className="grid grid-cols-3">
                    <h1 className="col-span-3 text-center text-4xl mt-6 mb-10">Anime Jokes</h1>
                    {Data.map((element) => (
                        <div className="w-5/6">
                            <h1 className="font-bold text-2xl my-4">{element.joke_anime}</h1>
                            <p> <span className="font-bold mr-2 my-2">Setup: </span><span className="italic">{element.setup}</span></p>
                            <p> <span className="font-bold mr-2 my-2">Punchline:</span><span className="italic">{element.punchline}</span></p>
                        </div>
                    ))}
                </div>
            }
        </section>
    );
};
export default Hero;