import React from "react";
import { NewRoomForm } from './NewRoomForm'


export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomIndex) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((_, index) => index !== roomIndex) //Interesting tidbit of information, Line 11:41, The _ is a placeholder variable
                                                                        //This _ replaces an unused variable (in this case if i had put room there)
                                                                        //It is unused because the current value / room within the array is not the current focus of the filter, we are only focused on the index of said array
                                                                        //Could have been written rooms: house.rooms.filter((room, index) => index !== roomIndex)
                                                                        //We replace room with _ to make the code more readable and remove the unused variable which didn't need to be given a name
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room] });

    const rooms = () => {
        return (
            <ul>
                {house.rooms.map((room, index) => (
                    <li key={index}>
                        <label>{`${room.name} Area: ${room.area} `}</label>
                        <button onClick={(e) => deleteRoom(index)}>Delete</button>
                    </li>
                ))}
            </ul>)
    }

    return (
        <div>
            <h1>{house.name}</h1>
            {rooms({houseId: house.id})}
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
}