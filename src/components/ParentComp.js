import React from 'react'
import Schedule from './Schedule'
import ScheduleTool from './ScheduleTool'

function ParentComp() {
    return (
        <div className="parent-comp">
            Parent Component
            <Schedule/>
            <ScheduleTool/>
        </div>
    )
}

export default ParentComp
