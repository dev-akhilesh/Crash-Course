import './App.css'
import HeavyComputationComponent from './HeavyComputationComponent';
import ProductGrid from './ProductGrid';

function App() {
  const items = ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Mango", "Pineapple"];

  return (
    <div>
      <h1>Optimizing Component Performance with useMemo</h1>
      {/* <HeavyComputationComponent items={items} /> */}
      <ProductGrid />
    </div>
  );
}

export default App
