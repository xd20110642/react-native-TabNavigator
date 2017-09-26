/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    navigate,
    Image
} from 'react-native';
//引入tab包
import TabNavigator from 'react-native-tab-navigator';

class bottom extends Component {
//    定义属性
    constructor(props){
        super(props)
        this.state={
            selected:1
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                    selected={this.state.selected===1}
                    title='消息'
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                     renderIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                     rendderSelectedIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        onPress={ () => this.setState({
                            selected:1
                        })}
                    >
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>这个是第一个完成的导航栏</Text>
                        </View>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        title="联系人"
                        selected={this.state.selected===2}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        renderSelectedIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        onPress={ () => this.setState({
                            selected:2
                        })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>这个是第二个完成的导航栏</Text>
                        </View>
                    </TabNavigator.Item>


                    <TabNavigator.Item
                        title="黄页"
                        selected={this.state.selected===3}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        renderSelectedIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        onPress={ () => this.setState({
                            selected:3
                        })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>我是黄牛 拉拉德玛西亚</Text>
                        </View>
                    </TabNavigator.Item>


                    <TabNavigator.Item
                        title="快说你是猪"
                        selected={this.state.selected===4}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        renderSelectedIcon={ () => <Image source={require('./img/u=1971161812,301571234&fm=200&gp=0.jpg')} style={styles.icon}/>}
                        onPress={ () => this.setState({
                            selected:4
                        })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>别睡了同学  快起来看书了</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});
AppRegistry.registerComponent('bottom', () => bottom);
