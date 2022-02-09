// import { Card } from '@mui/material'
import React from 'react'
import './Card.css'

const Card = () => {
    return(
        <div className='body'>

            <div className="Inp">
                <input placeholder="Add Task for Today"/> <button>Add</button>
                <div className='Card'>
                    <div className='Create'>
                    <p>1.</p>
                    <p> I ENJOY SWIMMING</p>
                    <button className='Del' >Delete</button>
                    </div>
                </div>
                
                
            </div>

        </div>
    );
}


export default Card