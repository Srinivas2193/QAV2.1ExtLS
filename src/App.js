import React, {useState} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MainTemplate from "./Components/MainTemplate/MainTemplate";
// import Navbar from "./Pages/NavBar/Navbar";
import Login from './Pages/Login/Login';
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

// Home page Routes component imports
import RequirementAnalysis from "./Components/LandingComponent/RequirementAnalysis/RequirementAnalysis";
import MindMaps from './Components/LandingComponent/MindMaps/MindMaps';
import InterLocking from './Components/LandingComponent/InterLocking/InterLocking';
import FlowCharts from './Components/LandingComponent/FlowChart/FlowChart';
import RequirementTraceability from './Components/LandingComponent/RequirementTraceability/RequirementTraceability';
import TestDesign from './Components/LandingComponent/TestDesign/TestDesign';
import BuildDeployement from './Components/LandingComponent/BuildDeploymentProcess/BuildDeploymentProcess';
import ApiTesting from './Components/LandingComponent/ApiTesting/ApiTesting';
import FunctionalAutomation from './Components/LandingComponent/FunctionalAutomationTesting/FunctionalAutomationTesting';
import PerformanceTesting from './Components/LandingComponent/PerformanceTesting/PerformanceTesting';
import SecurityTesting from './Components/LandingComponent/SecurityTesting/SecurityTesting';
import MdBlockChain from "./Components/LandingComponent/MindMaps/SubDomains/MdBlockChain";
import ILBlockChain from "./Components/LandingComponent/InterLocking/SubDomains/ILBlockChain";
import MdBanking from "./Components/LandingComponent/MindMaps/SubDomains/MdBanking";
import MdConstruction from "./Components/LandingComponent/MindMaps/SubDomains/MdConstruction";
import MdFintech from "./Components/LandingComponent/MindMaps/SubDomains/MdFintech";
import MdIoT from "./Components/LandingComponent/MindMaps/SubDomains/MdIoT";
import FinancialAndAnalytical from "./Components/LandingComponent/MindMaps/SubDomains/FinancialAndAnalytical";
import MdEcommerce from "./Components/LandingComponent/MindMaps/SubDomains/MdEcommerce";
import MdAnalytics from "./Components/LandingComponent/MindMaps/SubDomains/MdAnalytics";
import FcBlockChain from "./Components/LandingComponent/FlowChart/SubDomains/FcBlockChain";
// import './App.css';

function App() {
const [status, setStatus] = useState();

  const loginStatus=(data)=>{
setStatus(data);
  }
// console.log(status);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoute status={status} />}>
          <Route path="/" element={<MainTemplate />}>
            {/* sub Routes */}
            <Route path="/home" element={<Home />} />
            <Route
              path="/home/requirement-analysis"
              element={<RequirementAnalysis />}
            />

            {/* //MindMaps Routes */}
            <Route
              path="/home/mind-maps"
              element={<MindMaps />}
            />
              <Route path="/home/mind-maps/blockchain" element={<MdBlockChain />} />
              <Route path="/home/mind-maps/banking" element={<MdBanking />} />
              <Route path="/home/mind-maps/fintech" element={<MdFintech />} />
              <Route path="/home/mind-maps/construction" element={<MdConstruction />} />
              <Route path="/home/mind-maps/iot" element={<MdIoT />} />
              <Route path="/home/mind-maps/financial-analytical" element={<FinancialAndAnalytical />} />
              <Route path="/home/mind-maps/e-commerce" element={<MdEcommerce />} />
              <Route path="/home/mind-maps/analytics" element={<MdAnalytics />} />

              {/* // Interlocking Routes */}
              <Route path="/home/inter-locking" element={<InterLocking />} />

              <Route path="/home/inter-locking/blockchain" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/banking" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/fintech" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/construction" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/iot" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/financial-analytical" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/e-commerce" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/analytics" element={<ILBlockChain />} />

              {/* //Flowchart Routes */}
              <Route path="/home/flow-chart" element={<FlowCharts />} />
              <Route path="/home/flow-chart/blockchain" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/banking" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/fintech" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/iot" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/financial-analytical" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/e-commerce" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/analytics" element={<FcBlockChain />} />




            <Route path="/home/requirement-traceability" element={<RequirementTraceability />} />
            <Route path="/home/test-design" element={<TestDesign />} />
            <Route path="/home/build-deployment" element={<BuildDeployement />} />
            <Route path="/home/api-testing" element={<ApiTesting />} />
            <Route path="/home/functional-automation" element={<FunctionalAutomation />} />
            <Route path="/home/performance-testing" element={<PerformanceTesting />} />
            <Route path="/home/security-testing" element={<SecurityTesting />} />






            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* redirect empty path to home page */}
            <Route path="/" element={<Navigate to={`/home`} />} />

            {/* redirect other routes to home page */}
            <Route path="/*" element={<Navigate to={`/home`} />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login loginPageCall={loginStatus} />} />
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
