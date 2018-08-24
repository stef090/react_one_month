class Photo extends React.Component
{
    render()
    {
        return(
        <div className="photo">
            <img src="static/images/llama.png" alt="Photo"/>
        </div>    
        ); 
    }

}

class Biography extends React.Component
{

    render()
    {
        return(
        <div className="biography">
            <h1 className="name">Rocket Llama</h1>
            <h2 className="location">Peru</h2>
            <div className="occupation">
                <p>Eating grass and flying</p>
            </div>
        </div>      
        );

    }

}

class Updates extends React.Component
{

    render()
    {
        return(
        <div className="updates">
            <ul>
                <li className="update">Update!</li>
                <li className="update">Next update!</li>
            </ul>
        </div>
        );

    }

}

class Card extends React.Component
{
    render()
    {
        return(
    <div className="card">
        <Photo/>
        <Biography/>
        <Updates/>
    </div>);
    }

}




ReactDOM.render(

    <Card />,
    document.getElementById('app')
);

