import React from "react";

export const Cards = (props) => {
    return (
        <>

        <div class="card col-xs-12 col-md-6 col-lg-3" style={{width: "15rem"}}>
            <img id="imagen" src={props.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </>
    )
}