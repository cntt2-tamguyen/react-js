import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';

class News extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Danh sách tin</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tin tuc */}
                <div className="container">
                    <div className="row mt-3">
                        {
                            dl.map((value,key)=>{
                                return(
                                    <NewsItem key={key} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan} tinId={value.id}></NewsItem>
                                )
                            })
                        }
                    </div>
                </div>
                {/* end tin tuc  */}
            </div>

          
        );
    }
}

export default News;