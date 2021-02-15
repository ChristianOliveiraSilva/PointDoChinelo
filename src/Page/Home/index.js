import Cart from "../../Feature/Cart";
import Product from "../../Model/Product";

function Home() {

  const cart = new Cart();
  cart.add(new Product('id', 'name', 5))
  console.log({a: cart.list()})


  return (
    <div className="main">
      <main className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
        </div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">CURSOS ONLINE</h1>
          <p className="lead">CONHEÇA ALGUNS DOS CURSOS EM DESTAQUE:</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
