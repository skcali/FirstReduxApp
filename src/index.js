import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/layout"
import store from "./store"

const app = document.getElementById('root')

ReactDom.render(<Provider store={store}>
    <Layout />
    </Provider>, app);