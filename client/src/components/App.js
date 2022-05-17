import Greeting from "./Greeting.js";
export default function App({ $target }) {
  this.state = {};

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  const greeting = new Greeting({
    $target,
    initialState: "",
  });
}
