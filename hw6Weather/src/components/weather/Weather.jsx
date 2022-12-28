import axios from 'axios'
import React, { Component } from 'react'
import Card from '../card/Card'

export default class Weather extends Component {
    constructor(props){
        super(props)
        this.state={
            poisk:'',
            weather:null,
            city:null
        }
        this.handlePoisk=this.handlePoisk.bind(this)
    }
     handlePoisk= (e)=>{
        this.setState({
            poisk:e.target.value
        })
    }
    handleSubmit= async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.poisk}&lang=ru&appid=986b8fe216175b5220a56aaa7eb7303c`)
            const data = await response.data
            await this.setState({
                weather:data.list,
                city:data.city
            })
           
           
        }
        catch(e){
            alert(e.response.data.message)
        }
        
    }

    
  render() {
    return (
      <div>
        <form action="">
            <input type="text" onChange={this.handlePoisk} />
            <button onClick={e=>{
                this.handleSubmit(e)
                }}>search</button>
        </form>
        <h1>{this.state.city?.name}</h1>
        {this.state.weather?.map(item=>
            <Card key={item.dt_txt} item={item}/>
        )}
      </div>
    )
  }
}
