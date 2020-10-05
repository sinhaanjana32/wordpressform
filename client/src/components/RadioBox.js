import React from 'react'
import {   Radio } from 'antd';

const RadioBox = () => {


    const [value, setValue] = React.useState('1')

    function onHandleChange(e) {
      console.log('radio checked', e.target.value);
      setValue(
         e.target.value,
      );
    };



    return (
        <div>
            <h3>  3. Pick your proffesion <br/>
            <Radio.Group onChange={onHandleChange} value={value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
                </h3>

        </div>
    )
}

export default RadioBox
