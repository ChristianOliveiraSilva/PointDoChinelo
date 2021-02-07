import './Style/style.css'

import React from 'react';

import ClassNotAccessible from './Components/ClassNotAccessible'
import Video from './Components/Video'
import VideoBar from './Components/VideoBar'
import VideoBoxInfo from './Components/VideoBoxInfo'
import MoreContent from './Components/MoreContent'
import teste from '../../Assets/teste.mp4'


class Class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Não carregado',
      courseName: 'Não carregado',
      author: 'Não carregado',
      date: 'Não carregado',
      permission: false
    }
  }

  componentWillMount() {
    this.setState({
      name: 'Video aula 01 Video aula 01 ',
      courseName: 'missanga',
      author: 'Alexandra',
      date: '20/20/2020',
      permission: true
    })
  }

  render () {

    if (!this.state.permission) {
      return <ClassNotAccessible />
    }

    let info = {
      name: this.state.name,
      author: this.state.author,
      date: this.state.date,
    } 

    return (
      <main className="container-fluid bg-dark m-0">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="col-12 text-white">
              <Video src={teste} />
              <VideoBar info={info} />
            </div>
            <div className="col-12">
              <VideoBoxInfo />
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0">
            <MoreContent courseName={this.state.courseName} />
          </div>
        </div>
      </main>
    )
  }
}

export default Class;
