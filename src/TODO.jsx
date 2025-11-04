import React, { useState } from 'react'
import './TODO.css'
import todo_icon from './assets/todo_icon.png'
import bin from './assets/bin.png'
import { useRef, useEffect } from 'react'



const TODO = () => {
    const first = useRef(null);
    const [count, setcount] = useState(localStorage.getItem("LalitMaity") ? JSON.parse(localStorage.getItem("LalitMaity")) : []);
    useEffect(() => {
        console.log("Hi Lalit");
        localStorage.setItem("LalitMaity", JSON.stringify(count))

    }, [count])





    const data = () => {
        if (first.current.value === '') {
            alert("You did not put any value")
        }
        else {
            // setcount([first.current.value, ...count]);
            // first.current.value = ''
            const newtodo = {

                text: first.current.value,
                done: true

            }
            setcount([newtodo, ...count])
            first.current.value = ''
        }
    }
    const Erase = (index) => {
        setcount(count.filter((_, i) => i != index))

    }
    // const change = (index) => {
    //     if (toggle.includes(index)) {
    //         settoggle(toggle.filter((i) => i != index))
    //     }
    //     else {
    //         settoggle([...toggle, index]);
    //     }

    // }
    const change = (index) => {
        const update = count.map((item, i) => (
            i === index ? { ...item, done: !item.done } : item
        ))
        setcount(update);

    }
    return (

        <div className="contain">
            <div className="container">
                <div className="pic">
                    <img src={todo_icon} alt="" />
                    <h2> TODO LIST</h2>
                </div>

                <div className="myinput">
                    <input type="text" placeholder='Enter Task' ref={first} />
                    <button onClick={() => {
                        data();
                    }} >ADD +</button>

                </div>
                <ul>
                    {count.map((i, index) => (
                        <div className='boss'>

                            {/* <li className='check' onClick={() => {
                            change(index);
                        }} style={{ textDecoration: toggle.includes(index) ? "line-through" : "none" }}>{i}</li><img src={bin} alt="" onClick={() => {
                            Erase(index);
                        }} /> */}
                            <li className={i.done ? "ul" : "ch"} onClick={() => {
                                change(index);
                            }} style={{ textDecoration: i.done ? "none" : "line-through" }}>{i.text}</li><img src={bin} alt="" onClick={() => {
                                Erase(index);
                            }} />

                        </div>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default TODO
