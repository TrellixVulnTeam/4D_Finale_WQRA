import React, { useState } from 'react'

const CheckBox = ({ check, ...props }) => {
  const [checked, setChecked] = useState(true)
  const [visitorRole, setVisitorRole] = useState(false)

  function changeCheckbox() {
    check(visitorRole, setVisitorRole)
    setChecked(!checked)
  }
  console.log(visitorRole)

  return (
    <div className={props.className}>
      <input type="checkbox" checked={!checked} onChange={changeCheckbox} />
    </div>
  )
}
export default CheckBox
