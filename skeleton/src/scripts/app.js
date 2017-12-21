import '../styles/base.scss';

import p5 from 'p5';
import { bootstrap } from './util';
import sketch from './sketch';

const elem = document.getElementById('app');
const app = new p5(bootstrap(sketch, elem), elem);
console.log("Started!");
