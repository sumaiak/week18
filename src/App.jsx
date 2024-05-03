import Timer from "./Exercise3/Timer";
import Counter from "./exercise1/counter";
import ListDemo from "./exercise2/ListDemo";
import FoodList from "./Exercise3/FoodRecipe/FoodList";
export default function app(){


return(
<>
<Counter initialCount={5} />

<ListDemo />
<Timer/>
<FoodList/>

</>


);
}

