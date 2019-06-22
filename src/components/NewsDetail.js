import React, { Component } from 'react';
import dl from './dulieu.json'
import NewsRelated from './NewsRelated.js';

class NewsDetail extends Component {
    render() {
        var dem = 1;
        return (
            <div>
                <header className="masthead tintuc">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                          <h1 className="mb-5">Chi tiet tin</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                {/* begin tin tuc */}
                {
          dl.map((value,key)=>{
            if(value.id===parseInt(this.props.match.params.id,20) ){
              return(
                <div className="jumbotron jumbotron-fluid" key={key}>
                <div className="container">
                  <img src={value.anh} className="img-fluid rong100" alt="react" />
                  <h3 className="lead text-center">{value.tieuDe}</h3>
                  <hr className="my-2" />
                  {
                    value.noiDung 
                  }
                </div>
              </div>
              )
            }else {return true;}
          })
        }
                  <div className="container">
                  <div className="card-body">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                  </div>
                  <div className="col-12">
                    <div className="card-deck">
                      {
                        dl.map((value,key)=>{
                          if(value.id !== parseInt(this.props.match.params.id,20) ){
                            if(dem<=4){
                              dem++;
                              return(
                                <NewsRelated 
                                  key={key} 
                                  anh={value.anh} 
                                  tieuDe={value.tieuDe} 
                                  trichDan={value.trichDan} 
                                  tinId={value.id}>
                                </NewsRelated>
                              )
                            }
                          }
                         return true; 
                        })
                      }
                    </div>
                  </div>   
                </div>
                {/* end tin tuc  */}
              </div>

        );
    }
}

export default NewsDetail;