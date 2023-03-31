import { View } from './core/view';

import newCounter from './component/counter';
import newNavbar from './component/navbar';

const counter = newCounter({
    output: View.id('output'),
    increment: View.id('increment'),
    decrement: View.id('decrement'),
});

const navbar = newNavbar({
    hamburger: View.id('hamburger'),
});

counter.onInit();
navbar.onInit();