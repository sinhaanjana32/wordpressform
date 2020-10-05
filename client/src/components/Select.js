
import React,{Component} from 'react'

import { Select, Radio } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}



function handleChange(value) {
    console.log(`Selected: ${value}`);
  }


class SelectNum extends Component {

  
 handleChange = (value) => {
        console.log(`Selected: ${value}`);
        console.log('Selected:', value);
      }
      



  render() {

    return (
      <>
       
    
        <br />
      
        <br />
        <h3>4. Select your option
        <Select  defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
          {children}
        </Select>
        </h3>
      </>
    );
  }
}

export default SelectNum