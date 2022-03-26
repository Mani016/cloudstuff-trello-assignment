import React from 'react';

// Dashboard
const Overview = React.lazy(() => import('./Components/Overview'));
const Board = React.lazy(() => import('./Components/Board'));

let routes = [
  { path: '/Overview', name: 'Overview', component: Overview }, // Overview
  { path: '/board', name: 'Board', component: Board }, // Board
];

export default routes;
