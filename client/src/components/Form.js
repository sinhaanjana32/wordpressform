import React, {useState} from 'react'
import firebase from 'firebase'
import Axios from 'axios'
import { Input } from 'antd';
import { Checkbox,  Radio, Select } from 'antd';
const { Option } = Select;

const formStyle = {
    marginTop: '140px',
    width: '500px',
    marginLeft: '20px',
    justifyContent: 'center',
    alignItemss: 'center',
  };


const Form = () => {

    const [name, setName] = useState('')
    const [cb, setCb] = useState([])
    const [op, setOp] = useState('1')
    const [price, setPrice]= useState('')

    
    const options = [
        { label: 'WP', value: 'WP' },
        { label: 'WIX', value: 'WIX' },
        { label: 'Something Else', value: 'Something Else' },
      ];

     const children = [];
        for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }


    function onNameChange(e) {
        console.log(e.currentTarget.value)
        setName(e.currentTarget.value)
    }

    function onCbChange(checkedValues) {
        console.log('checked = ', checkedValues);
        setCb([...checkedValues])
        console.log(cb)
      }


      function onOpChange(e) {
        console.log('radio checked', e.target.value);
        setOp(e.target.value)
      }

    function onPriceChange(value) {
      
        console.log('Selected:', value);
        setPrice(value)
      }
      



    const  onSubmit = (event) => {
        event.preventDefault();


        if (!name || !cb || !op ||
            !price) {
            return alert('fill all the fields first!')
        }

        const variables = {
            email:firebase.auth().currentUser.email,
            name: name,
            checkbox: cb,
            radiobox: op,
            listbox: price,
        }

        console.log(variables)
        Axios.post('/api/uploadInfo', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                
                } else {
                    alert('Failed to upload Product')
                }
            })

    }



    return (

        <div style={formStyle}>


     <form onSubmit={onSubmit}>

            <h3>1. Name</h3>     
            <Input rows={3} placeholder="type" onChange={onNameChange}  /> 
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            <div>
        <h3>2.
              <Checkbox.Group options={options} defaultValue={['WP']} onChange={onCbChange} /></h3>
        </div>

        <div>
            <h3>  3. Pick your proffesion <br/>
            <Radio.Group onChange={onOpChange} value={op}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
                </h3>

        </div>




        <h3>4. Select your option
        <Select  defaultValue="a1" onChange={onPriceChange} style={{ width: 200 }}>
          {children}
        </Select>
        </h3>

            <button type="submit" className="btn btn-primary">Submit</button>
    </form>
       
        </div>
    )
}

export default Form







