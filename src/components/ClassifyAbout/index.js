import React, { Component } from 'react'
import Grid from './sub'
import './index.less'

class Classify extends Component {
  render () {
    const test = [{text: '小说', id: 'fiction'}, {text: '散文', id: 'prose'}, {text: '现代诗', id: 'modern-poem'}, {
      text: '古诗词',
      id: 'ancient-poem'
    }]
    return (
      <div className='classify-container'>
        {test.map((content, i) => {
          return <Grid content={content} key={i} />
        })}
      </div>
    )
  }
}

export default Classify
