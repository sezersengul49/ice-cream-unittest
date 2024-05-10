import Toppings from "./components/Toppings"
import Form from "./components/Form"
import Scoops from "./components/Scoops"


const App = () => {
  return (
    <div className="bg-black min-vh-100 text-light p-3 py-5">
      <div className="container">
       <Scoops/>
       <Toppings/>
        <Form/>
        </div>
    </div>
  )
}

export default App;