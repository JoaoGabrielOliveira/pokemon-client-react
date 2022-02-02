import React from 'react';

export default props => 


<div className="newsCard">
    
        <img src={props.img} height="auto" />

        <div className="title" style={{backgroundColor:"#FF0000"}}><strong>{props.title}</strong></div>

        <div className="description">{Array.isArray(props.children) ? props.children[0] : props.children}</div>

        <div style={{color:"#D3D3D3"}}>@{props.publisher}</div>
        
        <a  className="btn"  style={{textDecoration:"none",color:"Black"}} href={props.link}><strong>Ler Mais</strong></a>
</div>
