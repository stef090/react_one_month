var llama = 
{
  "name": "Rocket Llama",
  "location":{"country": "Peru",
              "city": "Lima"},
  "occupation": {"title": "Eating grass and flying around",
                 "employer": "Greener Pastures"},
  "photo": "/static/images/llama.png",
  "updates": 
  [
    {
        "platform": "Twatter",
        "status": "The grass is always greener on the other side of the fence."
    },
    {
        "platform": "Fakebook",
        "status": "The fence was too high, I could not make it across!"
    },
    {
        "platform": "Twatter",
        "status": "I got off on the wrong foot!"
    }
  ]
}




class Photo extends React.Component
{
    render()
    {
        return(
        <div className="photo">
            <img src={this.props.photo} alt="Photo"/>
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
            <h1 className="name">{this.props.name}</h1>
            <h2 className="location">{this.props.location.city},{this.props.location.country}</h2>
            <div className="occupation">
                <p>{this.props.occupation.title} at {this.props.occupation.employer}</p>
            </div>
        </div>      
        );

    }

}

class Updates extends React.Component
{

    updates()
    {
      var updates = this.props.updates
      
      var formattedUpdates = updates.map(function(update, index)
      {
        return  (<li className="update" key={index}>{update.status}</li>)
      });

      this.props.updates = formattedUpdates;

      return this.props.updates;
    }



    render()
    {
        return(
        <div className="updates">
            <ul>
                {this.updates()}
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
        <Photo photo={llama.photo}/>
        <Biography name={llama.name} 
                   location={llama.location} 
                   occupation={llama.occupation}/>
        <Updates updates={llama.updates}/>
    </div>);
    }

}




ReactDOM.render(

    <Card />,
    document.getElementById('app')
);

