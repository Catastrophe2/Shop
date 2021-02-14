import './App.css';
import Products from './components/Products/Products.js'
import Header from './components/Header/Header.js'
import { useEffect , useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [keep, setKeep] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {setProducts(data)});
  },[])

  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});

const categories = Object.keys(groupBy(products, 'category'));

  const setCat = (current) => {
    setCategory(current);
  }

  return(
    <div>
      <Header categories = {categories} setCat = {setCat} />
      <div className = "products"><Products products = {products} category = {category}/></div>
    </div>
  )

}


export default App;
