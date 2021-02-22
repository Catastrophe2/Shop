import { Slider, Switch } from 'antd';
import { useEffect , useState } from 'react';

const Range = ({setRange}) =>{
  const [disabled, setDisabled] = useState(false);
  const marks = {
    1:"1$",
    999:"999$"
  }
  const changed = value => {
    setRange(value)
  }    
  return (
    <>
    <span>Price Range:</span>
      <Slider className = "ranger" range defaultValue={[1,999]} marks={marks} disabled={disabled} max = {999} onChange = {changed}/>
    </>
  );
}

export default Range;