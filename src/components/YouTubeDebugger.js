import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }      
    }
  }

  handleChangeBitrate = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleChangeResolution = event =>{
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleChangeBitrate}></button>
        <button className='resolution' onClick={this.handleChangeResolution}></button>
      </div>
    )
  }
}

export default YouTubeDebugger

