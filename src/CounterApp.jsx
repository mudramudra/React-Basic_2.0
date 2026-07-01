import React from 'react'

const CounterApp = () => {

    let num=0;
    let count=0;
    let [count,setCount]=useState(0);
    const plus=()=>{
        num++
        setCount(count+1)
    }
  return (
    <div>CounterApp</div>
  )
}

export default CounterApp