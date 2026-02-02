import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Results } from './components/results/results';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'results',
        component: Results,
        title: 'Results'
    }
];
