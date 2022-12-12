import "./style.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Ekart</h1>
        <h3>Electronics sale- 2022 </h3>
      </section>
      <section className="linktoProducts">
        <NavLink to="/products">
          <button className="btn-secondary">
            <span>products</span>
          </button>
        </NavLink>
      </section>
    </div>
  );
};
