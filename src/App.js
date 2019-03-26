import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {

  state ={
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=5a50489351685205b5a175c684a208e7",
    query_url: "https://www.food2fork.com/api/search?key=5a50489351685205b5a175c684a208e7",
    details_id:3878,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  }

  async getRecipes(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0){
        this.setState(()=>{
          return{
            error: "Sorry, your search did not return any results, please try again"
          }
        });
      }else{
        this.setState(()=>{
          return {
            recipes:jsonData.recipes
          }
        });
      }
    }catch(e){
      console.log(e);
    }
  }
  componentDidMount(){
    this.getRecipes();
  }
  // conditional rendering using switch case
  displayPage(index){
    switch(index){
      default:
        case 1:
          return (<RecipeList  recipes={this.state.recipes} handleDetails={this.handleDetails} 
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
          />);
        case 0:
          return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>);

    }
  }

  handleIndex = index=>{
     this.setState({
       pageIndex: index
     })
  }

  handleDetails = (index, id)=>{
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  handleChange = (event)=>{
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    const { query, query_url, search} = this.state;
    this.setState(()=>{
      return{
        url:`${query_url}${query}${search}`,search:""
      }
    }, ()=>{
      this.getRecipes();
    })
  }

  render() {

    return (
      <React.Fragment>
         {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;

