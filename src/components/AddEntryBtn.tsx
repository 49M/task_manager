"use client"
import React from 'react'


const AddEntryBtn = () => {

    function handleClick() {
        alert("Clicked");
    }

    return (
        <div>
            <button onClick={handleClick} className='p-2 rounded-full bg-blue-600 active:bg-blue-400'>
                Add Entry
            </button>
        </div>
    )
}

export default AddEntryBtn;