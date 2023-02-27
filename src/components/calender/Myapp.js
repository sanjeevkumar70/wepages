// import { Inject,Month } from '@syncfusion/ej2-react-base'
import React from 'react'
import { ScheduleComponent, Day, Week, Inject } from 'syncfusion/ej2-react-schedule';


const Myapp = () => {
  return (
	<div>
		 <Inject services={[Day, Week]}/>
	</div>
  )
}

export default Myapp