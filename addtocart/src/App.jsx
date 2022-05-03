import { render } from "solid-js/web";

import "./index.scss";
import AddToCart from "addtocart/AddToCart";

const App = () => (
  <AddToCart/>
);
render(App, document.getElementById("app"));
