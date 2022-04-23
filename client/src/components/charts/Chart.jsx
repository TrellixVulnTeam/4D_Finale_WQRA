// import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts'
import { useEffect, useState } from 'react'
import './chart.css'
import CheckBox from '../UI/checkBox/CheckBox'
import ButtonSwith from '../UI/buttons/ButtonSwitch'
// import { parseISO, format } from 'date-fns'

const Chart = (props) => {
  const [color, setColor] = useState('')
  const [buttBlock, setButtbuttBlock] = useState('button button__block ')

  useEffect(() => {
    if (props.stock.data[0].value < props.stock.data[99].value) setColor('#A0E28D')
    else setColor('#FF9180')
  }, [])

  return (
    <div className="stockChart">
      <div className='status'>
        <div className='status__info'>Статус: </div>
        <div className='status__string'>Доступ разрешен</div>
        <div className='status__button'>
        <ButtonSwith
          className={buttBlock}
          onClick={() => {
            if (buttBlock === 'button button__block ') {
              setButtbuttBlock('button button__normal ')
            }
            else
              setButtbuttBlock('button button__block ')
          }}
        >Заблокировать
        </ButtonSwith></div>
      </div>
      <div className='role'>
        <div className='role__info'>Роли:  </div>
        <div className='role_list'>
            <div>Читатель</div>
            <div>Клиент</div>
        </div>
        <div className='role__checkbox'>
          <CheckBox/>
          <div>Читатель</div>
          <CheckBox/>
          <div>Клиент</div>
          <CheckBox/>
          <div>Администратор</div>
        </div>
        <div className='role__button'><button className='button button__normal '>Добавить роль</button></div>
      </div>
      <div className='balance'>
        <div className='balance__info'>Баланс:</div>
        <div className='balance__number'>14000</div>
      </div>
    </div>
  )
}

// function CustomTooltip({ active, payload, label }, currency) {
//   if (active)
//     return (
//       <div className="tooltip">
//         <h4>{format(parseISO(label), 'eeee, d MMM')}</h4>
//         <p>{payload[0].value.toFixed(2)}</p>
//       </div>
//     )

//   return null
// }

export default Chart
