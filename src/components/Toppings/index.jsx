import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {

  const [data, setData] = useState([]);
const [basket,setBasket]= useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/toppings")

      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange= (isChecked,item)=> {
    isChecked
    ? setBasket([...basket, item])
    :setBasket(basket.filter((i)=> i.name!== item.name));
  }

  return (
    <div>
      <h1>Sos Çeşitleri</h1>

      <p>
        Tanesi <span className="text-primary ">3</span>TL
      </p>
      <h3>
        Soslar Ücreti:<span data-testid= "total" className="text-primary">{basket.length* 3}</span>TL
      </h3>

      <div className="row gap-5  mt-4">
        {data.map((item)=> (
          <div className="col top-card" style={{width:'150px'}}>
            <label htmlFor= {item.name}>
            <img src= {item.imagePath} height={100} />
            <p className="text-nowrap text-center"> {item.name}</p>
            </label>
            <input 
            onChange={(e)=>handleChange(e.target.checked,item)}
            id= {item.name} type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
