import {connect } from 'react-redux'
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

@connect(({ demo }) => ({
    ...demo
}))

class Index extends Component {
  config = {
    navigationBarTitleText: 'demo'
  }
  componentWillMount () { }
  componentDidMount () {
    this.getData();
  }
  getData = () => {
    const { dispatch } = this.props;
    dispatch({type: 'demo/des'})
  }
  componentWillUnmount () { }

  componentDidShow() {
  }
  componentDidHide () { }

  render () {
    const {demo} = this.props;

    console.log(this.props,"this.props",demo)

    return (
      <View>Index</View>
    )
  }
}

export default Index;
