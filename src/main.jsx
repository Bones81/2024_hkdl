import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import PageNotFound from './components/page_not_found.jsx'
import Communication from './components/communication/communication.jsx'
import CostumesHMU from './components/costumes_hmu/costumes_hmu.jsx'
import Documents from './components/documents/documents.jsx'
import Covid from './components/covid/covid.jsx'
import Flying from './components/flying/flying.jsx'
import Food from './components/food/food.jsx'
import Health from './components/health_care/health_care.jsx'
import Housing from './components/housing/housing.jsx'
import Leisure from './components/leisure/leisure.jsx'
import Money from './components/money/money.jsx'
import Packing from './components/packing/packing.jsx'
import Performance from './components/performance/performance.jsx'
import Transportation from './components/transportation/transportation.jsx'
import Voting from './components/voting/voting.jsx'
import FTF from './components/FTF/FTF.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "communication",
        element: <Communication />
      },
      {
        path: "costumes-hmu",
        element: <CostumesHMU />
      },
      {
        path: "documents",
        element: <Documents />
      },
      {
        path: "covid",
        element: <Covid />
      },
      {
        path: "flying",
        element: <Flying />
      },
      {
        path: "food",
        element: <Food />
      },
      {
        path: "first-things-first",
        element: <FTF />
      },
      {
        path: "health",
        element: <Health />
      },
      {
        path: "housing",
        element: <Housing />
      },
      {
        path: "leisure",
        element: <Leisure />
      },
      {
        path: "money",
        element: <Money />
      },
      {
        path: "packing",
        element: <Packing />
      },
      {
        path: "performance",
        element: <Performance />
      },
      {
        path: "transportation",
        element: <Transportation />
      },
      {
        path: "voting",
        element: <Voting />
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
