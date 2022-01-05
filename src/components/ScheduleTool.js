import React, {useState} from 'react'
import Modal from './Modal'

//Button that launches a modal menu via portal
//Menu will have a submit form with input fields of name, date, address.
//When submitted, update database and create new objects w/ submitted inputs.
//Probably need to hide ScheduleTool except to admins. 

const ScheduleTool = () => {
  const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="schedule-tool">
        <>
          <button onClick={() => setIsOpen(true)}>Add to Schedule</button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          
          </Modal>
        </>
      </div>
    )
  }
  
  export default ScheduleTool;