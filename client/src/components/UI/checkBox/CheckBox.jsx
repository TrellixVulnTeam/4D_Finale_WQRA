import React, { useState } from 'react';

const CheckBox = (props) => {
    const [checked, setChecked] = useState(true);


   function chengeCheckbox() {
      setChecked(!checked);
   }

   return (<div className={props.className}>
      <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
   </div>

   )
}
export default CheckBox