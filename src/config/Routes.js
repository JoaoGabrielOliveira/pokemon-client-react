import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Dashboard, Pokemon, Noticia, Contato } from '../pages';

export class Routes extends Component {
    render() {
        return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemons" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route exact path="/noticia" component={Noticia} />
            <Route exact path="/contato" component={Contato} />
        </Switch>
        )
    }
}