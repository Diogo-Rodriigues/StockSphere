import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { Link, useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinners/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-indigo-900">
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden flex-grow pb-12">
          <Sidebar />
            <CompanyDashboard ticker={ticker!}>
              <Tile title="Company Name" subTitle={company.companyName} />
              <Tile title="Price" subTitle={"$" + company.price.toString()} />
              <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
              <Tile title="Sector" subTitle={company.sector} />
              <CompFinder ticker={company.symbol} />
              <TenKFinder ticker={company.symbol} />
              <motion.div 
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 m-4 transition-all duration-300 hover:shadow-indigo-500/20 hover:bg-white/15 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-indigo-600/5 pointer-events-none"></div>
                
                <h3 className="text-xl font-bold text-white mb-4">Company Description</h3>
                <p className="text-indigo-100 leading-relaxed">
                  {company.description}
                </p>
              </motion.div>
            </CompanyDashboard>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CompanyPage;