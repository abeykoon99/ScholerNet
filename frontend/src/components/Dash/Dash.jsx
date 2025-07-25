import React from "react"
import Back from "../common/back/Back"
import DashCard from "./DashCard"
import "./dsh.css"

import "../about/about.css"

const Dashboard = () => {
  return (
    <>
    
      <Back title='Dashboard' />
      <section className='team padding'>
        <div className='container grid'>
          <DashCard />
        </div>
      </section>
      
    </>
  )
}

export default Dashboard
