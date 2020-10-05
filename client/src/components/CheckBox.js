import React from 'react'
import { Checkbox } from 'antd';




const CheckBox = () => {
    
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }




    const options = [
      { label: 'WP', value: 'WP' },
      { label: 'WIX', value: 'WIX' },
      { label: 'Something Else', value: 'Something Else' },
    ];
  

    return (
        <div>
        <h3>2.
              <Checkbox.Group options={options} defaultValue={['WP']} onChange={onChange} /></h3>
        </div>
    )
}

export default CheckBox
