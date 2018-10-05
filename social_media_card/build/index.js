"use strict";

var llama = {
  "name": "Rocket Llama",
  "location": {
    "country": "Peru",
    "city": "Lima"
  },
  "occupation": {
    "title": "Eating grass and flying around",
    "employer": "Greener Pastures"
  },
  "photo": "/static/images/llama.png",
  "updates": [{
    "platform": "Twatter",
    "status": "The grass is always greener on the other side of the fence."
  }, {
    "platform": "Fakebook",
    "status": "The fence was too high, I could not make it across!"
  }, {
    "platform": "Twatter",
    "status": "I got off on the wrong foot!"
  }]
};

class Photo extends React.Component {
  render() {
    return React.createElement("div", {
      className: "photo"
    }, React.createElement("img", {
      src: this.props.photo,
      alt: "Photo"
    }));
  }

}

class Biography extends React.Component {
  render() {
    return React.createElement("div", {
      className: "biography"
    }, React.createElement("h1", {
      className: "name"
    }, this.props.name), React.createElement("h2", {
      className: "location"
    }, this.props.location.city, ",", this.props.location.country), React.createElement("div", {
      className: "occupation"
    }, React.createElement("p", null, this.props.occupation.title, " at ", this.props.occupation.employer)));
  }

}

class Updates extends React.Component {
  updates() {
    var updates = this.props.updates;
    var formattedUpdates = updates.map(function (update, index) {
      return React.createElement("li", {
        className: "update",
        key: index
      }, update.status);
    });
    this.props.updates = formattedUpdates;
    return this.props.updates;
  }

  render() {
    return React.createElement("div", {
      className: "updates"
    }, React.createElement("ul", null, this.updates()));
  }

}

class Card extends React.Component {
  render() {
    return React.createElement("div", {
      className: "card"
    }, React.createElement(Photo, {
      photo: llama.photo
    }), React.createElement(Biography, {
      name: llama.name,
      location: llama.location,
      occupation: llama.occupation
    }), React.createElement(Updates, {
      updates: llama.updates
    }));
  }

}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));