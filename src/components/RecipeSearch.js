import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-12 mx-auto col-md-10 mt-5 text-center">
                <h1 className="text-slated text-capitalize">search over 1 million recipes with {" "} <strong className="text-danger">food2fork</strong></h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                  <label htmlFor="search" className="text-capitalize">type recipes separated by comma</label>
                  <div className="input-group">
                    <input type="text" value={value} onChange={handleChange} name="search" placeholder="beef, chicken,onions, potato" className="form-control" />
                    <div className="input-group-append">
                      <button type="submit" className="input-group-text bg-primary text-white"><i className="fas fa-search" /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
