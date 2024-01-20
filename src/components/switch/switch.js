import * as React from "react"
import "./switch.scss"

const Switch = () => (
  <div className="switch-wrapper">
    <div className="sun"></div>
    <div className="toggle-wrapper">
      <input id="switch" type="checkbox"/>
      <label htmlFor="switch" id="toggle">Toggle</label>
    </div>
    <div className="moon"></div>
  </div>
)

export default Switch
