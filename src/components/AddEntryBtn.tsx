"use client"
import React from 'react'


interface props {
    onClick: () => void;
}

const AddEntryBtn: React.FC<props> = ({ onClick }) => {
    
    return (
        <div>
            <button className='p-2 rounded-full bg-blue-600 active:bg-blue-400' onClick={onClick}>
                Add Entry
            </button>
        </div>
    )
}

export default AddEntryBtn;