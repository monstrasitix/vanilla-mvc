import { View } from './core/view';

// import newCounter from './component/counter';
import { Counter, DOM } from './component/counter/angular';
import newNavbar from './component/navbar';

// const counter = newCounter({
//     output: View.id('output'),
//     increment: View.id('increment'),
//     decrement: View.id('decrement'),
// });

const counter = new Counter(new DOM());

const navbar = newNavbar({
    hamburger: View.id('hamburger'),
});

counter.onInit();
navbar.onInit();