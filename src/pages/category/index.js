import {connect } from 'react-redux'
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

@connect(({ category }) => ({
  ...category
}))


export default class Category extends Component {
  config = {
    navigationBarTitleText: '类别',
  };

  componentDidMount = () => {

  };

  render() {
    const {category} = this.props;

    console.log(this.props,"this.props",category)

    return (
      <View>category</View>
    )
  }
}
