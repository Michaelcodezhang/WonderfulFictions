import React, { Component } from 'react'
import BambooGrove from '../../../images/bambooGrove.jpg'
import './index.less'

class HomePage extends Component {
  render () {
    return (
      <div className='homepage-container'>
        <span className='homepage-container-poem'>
          息徒兰圃，秣马华山。<br />
          流磻平皋，垂纶长川。<br />
          目送归鸿，手挥五弦。<br />
          俯仰自得，游心太玄。<br />
          嘉彼钓翁，得鱼忘筌。<br />
          郢人逝矣，谁与尽言？<br />
        </span>
        <img className='homepage-container-img' src={BambooGrove} alt='' />
      </div>
    )
  }
}

export default HomePage
