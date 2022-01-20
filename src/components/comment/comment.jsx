import React, { useRef, useState } from 'react';
import HideButton from '../hidebutton/hideButton';
import Scroll from '../../baseUI/scroll';
import './comment.css'

const Comment = (props) => {

  const { openPinglun, essays } = props
  const inputRef = useRef()

  const[pinglun, setPinglun] = useState(['说的对啊','太有道理了','先赞后看，已成习惯'])
  const pre = (event) => {
    event.stopPropagation()
  }

  const addpinglun = () => {
    console.log(inputRef);
    setPinglun([
      ...pinglun,
      inputRef.current.value
    ])
    inputRef.current.value = ''
  }

  return (
    <>
      <div className="comments" onClick={openPinglun}>
        <div className="main-comments" onClick={pre}>
          <div className="main-comments-top">
            <HideButton openPinglun={openPinglun} />
            <p>评论</p>
          </div>
          <div className="main-comments-body">
            <Scroll
              direction={'vertical'}
              refresh={false}

            >
              <div className="pinglun">
                {
                  pinglun.map((item,index) => {
                    return (
                      <p className='show-title' key={index}>{item}</p>

                    )
                  })
                }
              </div>
            </Scroll>
          </div>
          <div className="add-comments">
            <input type="text" ref={inputRef} />
            <button onClick={addpinglun}>提交</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment