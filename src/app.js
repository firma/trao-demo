import Taro from '@tarojs/taro'
import React, {Component } from 'react'

import {Provider} from 'react-redux'
import './custom-variables.scss'
import dva from './dva';
import  models from './models'

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});


const store = dvaApp.getStore();

export default class App extends Component {
   componentDidMount () {
     if (process.env.TARO_ENV === 'weapp') {
       // 云开发初始化
       // Taro.cloud.init({env:'',traceUser: true,})
     }
   }
  componentWillMount() {
    this.update();
  }
  update = () => {
    if(process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
    }
  }

  componentDidShow () {
    Taro.setTabBarBadge({index:2, text: '2'})
  }
  componentDidHide () {}
  componentDidCatchError () {}

  render () {
    return ( <Provider store={store} >
      {this.props.children }
    </Provider>)
  }
}
