
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import './Home.css';
import Calendar from 'react-calendar';


export const Home = () => {

    const [fecha, setFecha] = useState(new Date());


    useEffect(()=>{

        console.log("Fecha escogida: ", dayjs(fecha).format('dddd DD MMMM YYYY'));

        let fechaBackend = dayjs(fecha).format("LLLL");
        // let date1 = dayjs(fecha);
        // let date2 = dayjs("1992-04-30");

        // let result = date1.diff(date2, 'years');

        console.log(fechaBackend)

    },[fecha]);

     return (
         <div className='homeDesign'>

            <div className='calendarDesign'>

                <Calendar onChange={setFecha} value={fecha}/>
            </div>
         </div>
     )
}