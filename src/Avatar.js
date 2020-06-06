import React, { Component } from 'react'
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist.js'; 

    class Avatar extends Component{
        
        constructor(){
            super();
            this.state ={
                name:'welcome to the avatar world'

            }
        }
       
        namechange() {
            this.setState({
                name:'Congratulations...! you came this far huh!!!'
            })
        }
       
        render() {


            const avatarlistarray = [
                {
                    id:1,
                    name:"jack",
                    work: "web developer"
                },
                {
                    id:2,
                    name:"julie",
                    work: "web developer"
                },
                {
                    id:3,
                    name:"rayn",
                    work: "web developer"
                },
                {
                    id:4,
                    name:"charles",
                    work: "web developer"
                }
        
                
            ]

            const arrayavatarcard =  avatarlistarray.map( (avatar, i) => {
                return <Avatarlist key={i} id={avatarlistarray[i].id} 
                                          name={avatarlistarray[i].name} 
                                          work={avatarlistarray[i].work} />
           })
       
        
            return ( <div className="mainpage tc"> <h1>{this.state.name}</h1>
            {arrayavatarcard}
             
             <button onClick = { () => this.namechange()}>Subscribe</button>
             <h1>created by kantesh</h1>
         </div>
               
         ) 
        }
    }

    

export default Avatar;