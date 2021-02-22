import '../App.css';
import Products from '../components/Products/Products.js'
import Header from '../components/Header/Header.js'
import { useEffect , useState } from 'react';
import Range from '../components/Range/Range';


const Homep = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [range, setRange] = useState([1,999])
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
      <Range setRange = {setRange}></Range>
      <div className = "products"><Products products = {products} category = {category} range = {range}/></div>
    </div>
  )

}


export default Homep;
