function Partenaires(){
    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            padding: 10,}}>
            <img src="/Partenaires/Frites-bonnel.png" style={{height:100,width:"auto"}}/>
            <img src ="/Partenaires/POS.png" style={{height:100,width:"auto"}} />
            <img src ="/Partenaires/SittiZen.webp" style={{height:100,width:"auto"}} />
            <img src ="/Partenaires/temps-instant.jpg" style={{height:100,width:"auto"}} />
            <img src ="/Partenaires/ethernis-drone.jpg" style={{height:100,width:"auto"}} />
            <img src ="/Partenaires/ludovic-sal.png" style={{height:100,width:"auto"}} />
        </div>
    )
}
export default Partenaires;