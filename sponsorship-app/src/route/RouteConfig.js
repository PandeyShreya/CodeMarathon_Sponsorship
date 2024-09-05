import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import DataPage from "../Pages/DataPage"
import SponsorDataP from "../Pages/SponsorDataP"
import MatchPage from "../Pages/MatchPage"
import PostPayment from "../Pages/PostPayment"
import DeletePayment from "../Pages/DeletePayment"

const RouterConfig =()=>{
    return <>
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/datapage" element={<DataPage/>}/>
            <Route path="/sponsordata" element={<SponsorDataP/>}/>
            <Route path="/matchdata" element={<MatchPage/>}/>
            <Route path="/addpayment" element={<PostPayment/>}/>
            <Route path="/deletepayment" element={<DeletePayment />} />
            
        </Routes>
        
        </BrowserRouter>
    </>
}

export default RouterConfig