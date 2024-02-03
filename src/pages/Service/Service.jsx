import React from 'react'
import './ServiceStyle.scss'
import { FaTasks } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function Service() {
  return (
    <div className='Service' id='Service'>
      <div className="bg"></div>
     <div className="containere">
     <h1>Our Service</h1>
      <p>We turn information into actionable insights We work to understand your issues
      and are driven to ask better questions in the pursuit of making work.</p>
     <ul>
      <li>
        <button>
       <div className="task blueviolet">
       <FaTasks className='task-icon'/>
       </div>
        <h3>Order Management</h3>
        <span>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</span>
        <a href="#">Learn more <FaArrowRight  className='right-icon'/></a>
        </button>
      </li>
      <li>
      <button>
       <div className="task red">
       <FaTasks className='task-icon'/>
       </div>
        <h3>Order Management</h3>
        <span>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</span>
        <a href="#">Learn more <FaArrowRight  className='right-icon'/></a>
        </button>
      </li>
      <li>
      <button>
       <div className="task blue">
       <FaTasks className='task-icon'/>
       </div>
        <h3>Order Management</h3>
        <span>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</span>
        <a href="#">Learn more <FaArrowRight  className='right-icon'/></a>
        </button>
      </li>
     </ul>

     <ul>
      <li>
      <button>
       <div className="task green">
       <FaTasks className='task-icon'/>
       </div>
        <h3>Order Management</h3>
        <span>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</span>
        <a href="#">Learn more <FaArrowRight  className='right-icon'/></a>
        </button>
      </li>
      <li>
      <button>
       <div className="task tamoto">
       <FaTasks className='task-icon'/>
       </div>
        <h3>Order Management</h3>
        <span>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</span>
        <a href="#">Learn more <FaArrowRight  className='right-icon'/></a>
        </button>
      </li>
      <li>
      <button>
       <div className="task">
       <FaTasks className='task-icon'/>
       </div>
        <h3>Order Management</h3>
        <span>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</span>
        <a href="#">Learn more <FaArrowRight  className='right-icon'/></a>
        </button>
      </li>
     </ul>
     </div>
    </div>
  )
}

export default Service
