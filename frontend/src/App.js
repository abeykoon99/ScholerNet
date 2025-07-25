import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"

import Dash from "./components/Dash/Dash"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import regGrp from "./components/student/regGrp"
import ProGrpDetails from "./components/student/ProGrpDetails"
import UpdateReg from "./components/student/UpdateReg"
import verificationY from "./components/pdffile/verificationY"
import research from "./components/student/reserch"
import Notices from "./components/student/Notices"
import verification from "./components/student/verification"
import reserchnew from "./components/student/reserchnew"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/dashboard' component={Dash} />                 
          <Route exact path='/al' component={ProGrpDetails} />
          <Route exact path='/reg' component={regGrp} />
          <Route exact path='/update/:id' component={UpdateReg} />
          <Route exact path='/r' component={verificationY} />
          <Route exact path='/re' component={research} />
          <Route exact path='/n' component={Notices} />
          <Route exact path='/v' component={verification} />
          <Route exact path='/get/:id' component={reserchnew} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
