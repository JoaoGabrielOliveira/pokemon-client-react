import React from 'react';

export default props => 


<div style={{ height: props.size.height,width:props.size.width }}>
    <div>
        <div className="CardN">
            <img src={props.img} width="100%" height="auto" />
            <div className="TiT" style={{backgroundColor:"#FF0000"}}><strong>{props.title}</strong></div> 
                <div className="conteu">{Array.isArray(props.children) ? props.children[0] : props.children}</div>
                <div style={{color:"#D3D3D3"}}>@{props.publisher}</div>
                <a  className="button"  style={{textDecoration:"none",color:"Black"}} href={props.link}><strong>Ler Mais</strong></a>
            </div>
    </div>

    
</div>
