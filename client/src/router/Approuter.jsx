import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "scenes/dashbord"
import Layout from "scenes/layout";
import Products from "scenes/products";
import Transaction from "scenes/transaction";
import NotFound from "pages/Notfound";
import Lead  from "scenes/Lead"
import NewLead from "pages/Lead/NewLead";
import Quote  from "scenes/Quote"
import NewQuote from "pages/Quote/NewQuote"
import Coustomer from "scenes/customers"
import NewCoustomer from "pages/Customer/NewCustomer";

const Approuter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashbord />} />
                <Route path="/lead" element={<Lead />} />
                <Route path="/lead/create" element={<NewLead />} />
                <Route path="/quotation" element={<Quote />} />
                <Route path="/quotation/create" element={<NewQuote />} />
                <Route path="/customers" element ={<Coustomer/>}/>
                <Route path="/customers/create" element ={<NewCoustomer/>}/>
                <Route path="/products" element={<Products />} />
                <Route path="/transactions" element={<Transaction />} />
                <Route path="*" element={<NotFound />} />

                {/**In case some one acess login page after being logged in */}
                <Route
                    path="/login"
                    element={<Navigate to="/dashboard" replace />}
                />
             
            </Route>
        </Routes>
    );
};

export default Approuter;
