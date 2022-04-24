import React, { useState } from 'react'

const CheckBox = (props, { check }) => {
  const [checked, setChecked] = useState(true)

  function changeCheckbox() {
    setChecked(!checked)
  }

  return (
    <div className={props.className}>
      <input type="checkbox" checked={checked} onChange={changeCheckbox} />
    </div>
  )
}
export default CheckBox
