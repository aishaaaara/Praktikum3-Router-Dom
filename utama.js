import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from './beranda';
import tentangsaya from './tentangsaya';
import karya from './karya';
import kontak from './kontak';

const utama = () =>(
    <Switch>
        <Route exact path="/beranda" component={beranda} />
        <Route path="/tentangsaya" component={tentangsaya} />
        <Route path="/karya" component={karya} />
        <Route path="/kontak" component={kontak} />
    </Switch>
)
export default utama;