import React from 'react'
import Chart from '../charts/Chart'
import './graph_panel.css'
import { useState } from 'react'
import ButtonSwith from '../../components/UI/buttons/ButtonSwitch'

const Graph_panel = ({ user }) => {
  // const [buttDay, setButtDay] = useState('button button__sortPush')
  // const [buttWeek, setButtbuttWeek] = useState('button button__sortNormal ')
  // const [buttMonth, setButtbuttMonth] = useState('button button__sortNormal ')
  // const [buttYear, setButtbuttYear] = useState('button button__sortNormal ')
  // const [buttAll, setButtbuttAll] = useState('button button__sortNormal ')

  return (
    <div>
      <Chart user={user} />
    </div>
  )
}

export default Graph_panel
