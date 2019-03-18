import React, { Component } from 'react'
import {
    StyleSheet,
     Text, 
     View, 
     ImageBackground,
    FlatList, 
    TouchableOpacity,
    Plantform
    } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Agenda extends Component{
    state = {
        tasks:[
            {id: Math.random(), desc: 'Trabalho blender Robson',
             estimateAt: new Date(), doneAt:new Date()},
             {id: Math.random(), desc: 'Concluir trabalho Robson',
             estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Trabalho blender Robson',
             estimateAt: new Date(), doneAt:new Date()},
             {id: Math.random(), desc: 'Concluir trabalho Robson',
             estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Trabalho blender Robson',
             estimateAt: new Date(), doneAt:new Date()},
             {id: Math.random(), desc: 'Concluir trabalho Robson',
             estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Trabalho blender Robson',
             estimateAt: new Date(), doneAt:new Date()},
             {id: Math.random(), desc: 'Concluir trabalho Robson',
             estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Trabalho blender Robson',
             estimateAt: new Date(), doneAt:new Date()},
             {id: Math.random(), desc: 'Concluir trabalho Robson',
             estimateAt: new Date(), doneAt: null},
            ],
            visibleTasks: [],
            showDoneTask: true,
        }
        
        filterTasks = () => {
            let visibleTasks = null
            if(this.state.showDoneTask){
                visibleTasks= [...this.state.tasks]
            } else {
                const pending = task => task.doneAt === null
                visibleTasks = this.state.tasks.filter(pending)
            }
            this.setState({ visibleTasks })
        }
        
        toggleFilter = () => {
            this.setState({ showDoneTask: !this.state.showDoneTask }
                , this.filterTasks)
            }
            
            componentDidCatch = () => {
                this.filterTasks()
            }
            
            toggleTask = id => {
                const tasks = this.state.tasks.map(task => {
                    if (task.id === id ){
                        task = {...task }
                    }
                    return task
                })
                this.setState({ tasks })
            }
            
            render() {
        return (
            <View style={styles.container}>
               <ImageBackground source={todayImage} 
               style={styles.background}>
               <View style={styles.iconBar}>
               <TouchableOpacity onPress={this.toggleFilter}>
                 <Icon name={ this.state.showDoneTask ? 'eye' : 'eye-slash'}
                   size={20} color={commonStyles.colors.secondary} />
               </TouchableOpacity>
               </View>
               <View style={styles.titleBar}>
                   <Text style={styles.title}>Hoje</Text>
                   <Text style={styles.subtitle}>
                      {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                   </Text>
               </View>
               </ImageBackground>
               <View style={styles.taksContainer}>
               <FlatList data={this.state.visibleTasks}
                     keyExtractor={item=> `${item.id}`}
                     renderItem={({item}) => 
                     <Task {...item} OnToggleTask={this.toggleTask}/>}/>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taksContainer: {
        flex: 7,
    },
})