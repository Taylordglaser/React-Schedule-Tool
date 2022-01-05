//Parent component that house 2 child components
//Child Comp 1 will have be a container that holds a list of objects.
//The objects will receive input data as props from Child Comp 2.
//Child Comp 2 will have a button that launches a modal (portal).
//It will have submit form input fields of name, date, address.
//When submitted, update database and create new objects w/ submitted inputs.
//Child Comp 1 will rerender with newly submitted objects
//After the date has passed, Child Comp 1 will auto delete data.
import ParentComp from "./components/ParentComp";

const App = () => {
  return (
    <div className="app">
      <ParentComp/>
    </div>
  )
}

export default App;
