# ReactB
---

> TwitterBoostrap elements for ReactJS

## ReactB?

_Flux_ pattern is a good thing but the official (and other) implementations are a bit too complicated to fit the needs of simple apps. 

With **Fluxo** I aim for simplicity first.

> You can use _Fluxo_ to detach the state handling responsibility from your ReactJS components.

A ReactJS component should implement **one single responsibility**:

> Components' responsibility is to describe the appeareance of a given set of data.

## Quick Start

    var Title = require('reactb/lib/title')
    
    // pure js
    var title = React.renderElement(Title, null, 'title text')'
    
    // jsx
    return <Title size="3">title text</Title>;