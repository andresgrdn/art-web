import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2021/01/23/Letter-S-SS-Logo-Design-Simple-Vector-Graphics-8004602-1-580x387.jpg"
          alt="Logo" />
        <h1 className="title">Cajas artesanales</h1>
      </nav>
      <div className="Product-showcase">
        <img src="https://www.formycake.com/16531-home_default/caja-decorada-corazones-28x28x8cm-azucren.jpg" alt="Imagen del producto" />
        <div>
          <p>Esta caja decorada es perfecta para eventos especiales. Está diseñada con un estilo elegante y sofisticado, con detalles en dorado y un lazo de seda en la parte superior. El interior está forrado con papel de seda para proteger los artículos que se colocan dentro. Es la caja ideal para regalos de bodas, cumpleaños, aniversarios o cualquier otra ocasión especial.</p>
          <p>$ 10.00</p>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  )
}

export default App
