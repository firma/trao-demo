import {connect } from 'react-redux'
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

@connect(({ car }) => ({
  ...car
}))

export default class Car extends Component {
  config = {
    navigationBarTitleText: '购物车',
  };

  componentDidMount = () => {

  };

  render() {
    const {car} = this.props;

    console.log(this.props,"this.props",car)

    return (
      <View>car </View>
    )
  }
}
