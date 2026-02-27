import { useState } from "react"

function Home(){
    console.log('hello')
    return (
        <div>
            Search Jobs

            {/* SearchForm */}
            <form>
                <input 
                type= 'text'
                placeholder= "Search for jobs"
                value= "value"
                />
            </form>
        </div>
    )
}
export default Home;