import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "../pages/dashbord";
import Layout from "../pages/layout";
import NotFound from "pages/Notfound";
import Lead from "../pages/Lead";
import Payments from "../pages/Payments/Index";
import Expenses from "../pages/Expenses/Index";
import DeliveryChallan from "../pages/DeliveyChallan/Index";
import NewDeliveryChallan from "../pages/DeliveyChallan/NewDeliveryChallan";
import Vendor from "../pages/Vendor/Index";
import NewLead from "pages/Lead/NewLead";
import Quote from "../pages/Quote";
import NewQuote from "pages/Quote/NewQuote";
import NewPurchaseOrder from "pages/PurchaseOrder/NewPurchaseOrder";
import Product from "pages/Product/Index";
import Coustomer from "../pages/Customer";
import NewCoustomer from "pages/Customer/NewCustomer";
import Invoice from "../pages/Invoice";
import NewInvoice from "pages/Invoice/NewInvoice";
import ReadModule from "module/ReadModule/ReadModule";
import UpdateModule from "module/UpdateModule/UpdateModule";
import PdfModule from "module/PdfModule/PdfModule.js";
import NewProduct from "pages/Product/NewProduct";
import NewPayment from "pages/Payments/NewPayment";
import NewExpenses from "pages/Expenses/NewExpenses";
import NewVendor from "pages/Vendor/NewVendor";
import PurchaseOrder from "pages/PurchaseOrder";
import Orgnization from "pages/Orgnization/Orgnization";
import Templates from "pages/Templates/index"
import SimpleWebSocketComponent from "pages/Websocket";

const Approuter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" exact element={<Dashbord />} />
                <Route path="/customers" element={<Coustomer />} />
                <Route
                    path="/customers/create"
                    element={<NewCoustomer checkHeader={true} />}
                />

                <Route path="/lead" element={<Lead />} />
                <Route path="/lead/create" element={<NewLead />} />
                <Route path="/quotation" element={<Quote />} />
                <Route path="/quotation/create" element={<NewQuote />} />

                <Route path="/invoice" element={<Invoice />} />
                <Route path="/invoice/create" element={<NewInvoice />} />

                <Route path="/payments" element={<Payments />} />

                <Route path="/expenses" element={<Expenses />} />
                <Route path="expense/create" element={<NewExpenses />} />

                <Route path="/deliverychallan" element={<DeliveryChallan />} />
                <Route
                    path="/deliverychallan/create"
                    element={<NewDeliveryChallan />}
                />

                <Route path="/vendors" element={<Vendor />} />
                <Route
                    path="/vendors/create"
                    element={<NewVendor checkHeader={true} />}
                />
                <Route path="/purchaseorder" element={<PurchaseOrder />} />
                <Route
                    path="/purchaseorder/create"
                    element={<NewPurchaseOrder />}
                />

                <Route path="/products" element={<Product />} />
                <Route
                    path="/products/create"
                    element={<NewProduct checkHeader={true} />}
                />

                {/**Routes for Read  Update And Pdf */}
                <Route path="/read/:entity/:id" element={<ReadModule />} />
                <Route path="/update/:entity/:id" element={<UpdateModule />} />
                <Route path="/download/:entity/:id" element={<PdfModule />} />
                <Route path="/record/payment/:id" element={<NewPayment />} />


                {/*Mangaining Orgnization Profile */}
                <Route
                    path="/:entity/:id"
                    element={<Orgnization />}
                />
                <Route
                    path="/templates"
                    element={<Templates />}
                />
                <Route path="/websocket" element={<SimpleWebSocketComponent />} />


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
