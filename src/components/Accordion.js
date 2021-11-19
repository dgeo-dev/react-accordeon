import React from "react"
import { useState, useRef } from "react"
import "./Accordion.css"

function Accordion({ title, content }) {
  const [active, setActive] = useState(false)

  const handleToggleAccordion = () => {
    setActive(!active)
  }

  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title" onClick={handleToggleAccordion}>
        {title} <span className="accordion__icon"></span>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  )
}

export default Accordion
