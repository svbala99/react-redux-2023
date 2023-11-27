import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCalenderSuccess } from '../../redux/actions/calenderAction';


function Calender() {
    const dispatch = useDispatch();

    const calenderGetAPI = async()=>{
        try{
            dispatch(fetchCalenderSuccess())
        }
        catch(e){
            console.log(e)
        }
            
    }

    useEffect(()=>{
        calenderGetAPI()
    }

    )
  return (
    <div>
      HAI
    </div>
  )
}

export default Calender
