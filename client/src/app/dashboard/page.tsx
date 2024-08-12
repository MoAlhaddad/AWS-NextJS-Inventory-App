"use client"

import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";



const Dashboard = () => {
/*Start With Mobile first when styling */
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows"> 
    <CardPopularProducts />
    <CardSalesSummary />
    <CardPurchaseSummary />
    <div className="row-span-3 bg-gray-500"/>
    <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
    <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
    <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
    </div>
  )
}

export default Dashboard;