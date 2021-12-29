import React from 'react'
import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa"; 

const Icon = ({icon}) => {
    
        switch (icon) {
            case 'circle': 
                return <FaRegCircle />
            case 'cross':
                return <FaTimes />
            default:
                return <FaPen />
        }
}
export default Icon