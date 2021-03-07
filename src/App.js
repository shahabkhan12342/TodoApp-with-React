import React from 'react';
import { Header,  Logo } from './components/Header';
import {Head,Logoo} from './components/Head';
import Footer from './components/Footer';
import BasicTextFields from './components/Textfield';
import './App.css';
import firebase from './config/firebase.js';
import AppRouter from './config/router';
import Home from './containers/Home';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';



// JAB BHI STATE UPDATE KRTY HAIN TO RENDER DUBARA CHALTA HAI, render k ander states set nae kraskty



// -------------------------class components----------------------------
// class App extends React.Component{
//   render() {
//     let name='Shahab';
//     return (
//       <div>
//         <h1>{name}</h1>
//       </div>
//     )
//   }
// }


//------------------concat using templete literals---------------------------
// class App extends React.Component{
//   render() {
//     let Fname='Shahab';
//     let Lname='Khan';
//     let arr=[1,3,4,5]
//     return (
//       <div>
//         <h1>{`${Fname} ${Lname}`}</h1>
//         <h1>{arr}</h1>
//       </div>
//     )
//   }
//}


//---------------------------MAP METHOD IN CLASS ATTRIBUTE---------------

// class App extends React.Component{
//   render()
//   {
//   let todo=[{name:'Shahab'},{name:'Shahabv'}];
//  return(
//    <div>
//    <ul>
//      {todo.map((item,index)=>{
//        return <li key={index}>{item.name}</li>
//      }
//      )}
//    </ul>
//    </div>
//  ) 
// }}
// ---------------MULTIPLE COMPONENTS------------------

// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1 style={{backgroundColor:'yellow'}}>Heading 2</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     let todo=[{name:'shahab'},{name:'ali'}];
//     return(
//       <div>
//        <Header/>
//        <h1 className='heading1'>Main Component</h1>
//       </div>
//     )
//   }
// }
// class App extends React.Component{
//      render(){
//       let todo=[{name:'shahab'},{name:'ali'}];
//       return(
//          <div>
//           <Header/>
//           <Logo/>
//         <h1 className='heading1'>Main Component</h1>
//         <button type="button" className="btn btn-primary">Primary</button>
//         <Footer/>
//         <BasicTextFields/>
//          </div>
//        )
//      }
//     }





//--------------------------------------------S T A T E S===========================
//     class App extends React.Component{
//       constructor()
//       {
//         super()
//        this.state={
//          name:"Shahab",
//          email:'123@gmail.com',
//          value:'',
//          value1:''
//        }
       
//       }
//       get_name=()=>{
//         console.log(this.state.name);
//    }
//    set_name=()=>{
//     this.setState({
//       name:this.state.value,
//       email:this.state.value1
//     })
// } 
//       render(){
       
//        return(
//           <div>
//            <Header/>
//            <h2>{this.state.name}</h2>
//            <h2>{this.state.email}</h2>
//           <input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder='Enter val' id='val' />
//           <input onChange={(e)=>this.setState({value1:e.target.value})} type="text" placeholder='Enter email' id='em' />
//           <button onClick={this.get_name}>Get Name</button>
//           <button onClick={this.set_name}>set Name</button>
         

//            <Logo/>
         
//          <Footer/>
        
//           </div>
//         )
//       }
//      }
 
//------------------------------PROPS------------------------------------------
// PROPS mai hota ye hai k aik component say dusry compoment ko data dena ho
// class App extends React.Component{
//   constructor()
//   {
//     super()
//    this.state={
//      name:"Shahab",
//      email:'123@gmail.com',
//      value:'',
//      value1:''
//    }
   
//   }
//   get_name=()=>{
//     console.log(this.state.name);
// }
// set_name=()=>{
// this.setState({
//   name:this.state.value,
//   email:this.state.value1
// })
// }
// get_props=(props)=>{
//   console.log(props)

// } 
//   render(){
   
//    return(
//       <div>
//        <Header get_props={this.get_props} name={this.state.name} page='Application page'/>
//        <h2>{this.state.name}</h2>
//        <h2>{this.state.email}</h2>
//       <input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder='Enter val' id='val' />
//       <input onChange={(e)=>this.setState({value1:e.target.value})} type="text" placeholder='Enter email' id='em' />
//       <button onClick={this.get_name}>Get Name</button>
//       <button onClick={this.set_name}>set Name</button>
//       <h1>hihh<hr>dhd</h1>
     

//        <Logo/>
     
//      <Footer/>
    
//       </div>
//     )
//   }
//  }


//  export default App;
//  }








//------------------- Routers, LifeCycle & TodoApp using ReactJS-------------------------


// -------------------------TODO APP WITH FIREBASE--------------------------------
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             todos:[{title:'Shahab', edit:false},{title:'hamza', edit:false}],
//             value:'',
             


//         }
//     }
//     add_todo=()=>{
//         let obj={title:this.state.value}
//         firebase.database().ref('/').child('todos').child('FurtherTodo').push(obj)
//         this.state.todos.push(obj)
//         this.setState({
//             todos:this.state.todos,
//             value:''
//         })
    
 
//     }
//     del_todo=(index)=>{
//         this.state.todos.splice(index,1)
//         this.setState({
//             todos:this.state.todos,
//             value:''
//         })
//     }
//     Edit_todo=(index,val)=>{
       
//         this.state.todos[index].edit= true;
//                 this.setState({
//             todos:this.state.todos
            
//         })
//     }
//     handle_change=(e,i)=>{
//         this.state.todos[i].title=e.target.value;
//         this.setState({
//             todos:this.state.todos
//         })
//     }
//     update=(index)=>{
       
//         this.state.todos[index].edit= false;
//                 this.setState({
//             todos:this.state.todos
            
//         })
//     }
//        render() {
           
         
//          return (
//              <div>
//                  <input value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})} type='text' placeholder='Enter value'/>
//                  <button onClick={this.add_todo}>Add Item</button>
//                  <ul>
//                      {this.state.todos.map((v,i)=>{
//                         return <li key={i}>{v.edit ? <input  value={v.title} onChange={(e)=>this.handle_change(e,i)} type='text'/> :v.title }
//                        {v.edit ? <button onClick={()=>this.update(i)} >Update</button> : <button onClick={()=>this.Edit_todo(i)}>Edit</button>}
                        
//                         <button onClick={()=>this.del_todo(i)}>Delete</button>
//                         </li>
//                      })}
//                  </ul>
                 
                 
//              </div>
//          )
//        }
//  }
// export default App;


//---------------------------------------------ROUTER------------------------------
// class App extends React.Component{
//     render(){
//         return(
//            <AppRouter/>
//         )
//     }ex
// }
// export default App




















//-----------------Web & Mobile Hybrid App Dev Class # 29 in Urdu/Hindi | Lifecycle & Indexes in ReactJS | Redux-------------------------------
//1- mounting => f irst: Constructor,second life cycle on Mounting: getDerivedStateFromProps,
// third:Render,Forth:ComponentDidMount
// 2- update => first: ShouldComponentUpdate, second: getSnapshotBeforeUpdate, third: ComponentDIDupdate
// 3- UnMounting



// class App extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             count:0,
//             data:[]
//         }
//         console.log('COnstructor')
//     }


    //  static getDerivedStateFromProps(props,state){
    //          console.log("getderivedStateFromProp",state)
    //          return null
    //  }





//     componentDidMount(){
//         console.log('ComponentDidMount') // API call krne ho ya database say data mangwana ho
//         fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data =>{

 
//     this.setState({
//         data: data
//     })
    
// })
//   .catch(err=>console.log(err))
//     }






// shouldComponentUpdate() // is mai false agya to ye component ko render to hojaiga but state update nae hone dega
// {
//   if(this.state.count <5)
//   {
//       return true;
//   }
//   else{
//       return false;
//   }
// }






// getSnapshotBeforeUpdate(preProps,preState){ // basically ye statechange hone say pehle wali value dekhata hai update say pehle wali value
//     console.log("getSnapshot=>",preState)
//     return 10;
// }
// componentDidUpdate(preProps,Prestate,snapshot){
//     console.log("componentDidUpdate",snapshot);
    
// }





//     render(){
        
//         console.log(this.state.data)
//         return(
//             <div>            
               
//                {this.state.count <5 && <Home count={10}/>}
//                <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
//                <button onClick={()=>this.setState({count:this.state.count - 1})}>Decrement</button>
            
//             </div>
 
//         )
//     }
// }


class Top extends React.Component{
    render(){
        return(
            <div className='Top'>
            <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TODO APP
            
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              
            </ul>
            
          </div>
        </div>
      </nav>
      <h1 className='mainH'>TODO APP ON REACT</h1>

            </div>
        
        )
    }
}
class Footerr extends React.Component{
    render(){
        return(
            <div className='Foor'>
                <h1 className='foot'>Todo App by Shahab </h1>

            </div>
        )
    }
}

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            todos:[{title:'Shahab',edit:false},{title:'Ghaus',edit:false},{title:'Hamza',edit:false}],
            value: '', 
            edit_valie:''
        }
    }
    add_todo= () => {
        var obj ={title:this.state.value}
        firebase.database().ref('/').child('todos').push(obj)
       this.state.todos.push(obj)
       this.setState({
           todos:this.state.todos,
           value:''
       })
    
    }
    delete_todo=(index)=>{
        this.state.todos.splice(index,1)
        this.setState({
            todos:this.state.todos,
            value:''
        })

    }
    edit_todo=(index,val)=>{
        
        this.state.todos[index].edit=true;
        this.setState({
            todos:this.state.todos
           
        })
        
    }
    handleChange=(e,index)=>{
        this.state.todos[index].title=e.target.value;
        this.setState({
            todos:this.state.todos
           
        })
      
    }
    update=(index)=>{
        
        this.state.todos[index].edit=false;
        this.setState({
            todos:this.state.todos
           
        })
        
    }


       render() {
           let {todos,value}=this.state;
         return (
             
             <div>
                 <Top/>
                 <input className='i1' value={value} onChange={(e)=> this.setState({value:e.target.value}) } type='text' placeholder='Enter Input'/>
                 <button className='b1' onClick={this.add_todo}>Add items</button>
             <ul className='ch'>
                 {todos.map((item,index)=>{
                     return <li className='ch' key={index}>
                         { item.edit ? <input type='text' value={item.title} onChange={(e)=>this.handleChange(e,index)} /> : item.title}

                        { item.edit ?
                         <button className='b3' onClick={()=>this.update(index)}>Update</button> 
                         :
                     <button className='b3' onClick={()=>this.edit_todo(index,item.title)}>Edit</button> 
                      } 
                     <button className='b2' onClick={()=>this.delete_todo(index)}>Delete</button>
                     
                     </li>
                 })}
             </ul>
            
             </div>
         )
       }
     }
export default App;