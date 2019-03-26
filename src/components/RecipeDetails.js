import React, { Component } from 'react'
import { recipe } from '../tempDetails';


export default class RecipeDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      
      recipe: recipe,

      url:`https://www.food2fork.com/api/get?key=5a50489351685205b5a175c684a208e7&rId=${this.props.id}`
    }

  }
  
  async componentDidMount(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      this.setState({
        recipe: jsonData.recipe
    },()=>{});
    }catch(e){
      console.log(e);
    }
  }

  render() {
    const { 
      image_url, 
      title,
       source_url, 
       ingredients, 
       publisher, 
       publisher_url
      } = this.state.recipe;

    const { handleIndex } = this.props;
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <button type="buttton" className="btn btn-warning mb-5 text-capitalize" onClick={()=>handleIndex(1)}>
                  back to recipe list
                </button>
                <img src={image_url} className="d-block w-100" alt="recipe" />
              </div>
              {/* details section */}
              <div className="col-10 mx-auto col-md-6 my-3">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className="text-slated text-capitalize text-warning">{publisher}</h6>
                <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">
                  publisher website
                </a>
                <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-3 mt-2 text-capitalize">
                  recipe url
                </a>
                <ul className="list-group mt-4">
                  <h2  className="mt-3 mb-4">Ingredients</h2>
                  {
                    ingredients.map((ingredient, index)=>{
                      return(
                        <li className="list-group-item text-slated" key={index}>{ingredient}</li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

