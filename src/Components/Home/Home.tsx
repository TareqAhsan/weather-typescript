import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home:React.FC = () => {
    // const navigate  = useNavigate()
    const history = useHistory()
    const [country,setCountry] = useState<string>("");

    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value)
    }
    const handleSubmit = ()=>{
        history.push(`/country/${country}`)
    }
    return (
        <div data-testid="home">
            <input type="text" name="country" value={country} id="" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default Home;