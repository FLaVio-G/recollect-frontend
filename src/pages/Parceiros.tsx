import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { ParceirosCard } from "../components/Parceiros/ParceirosCard";
import api from "../services/api";
import { CompaniesResponse } from "../model/company.type";
import { useState } from "react";
import { useEffect } from "react";

function Parceiros() {

  const [companyList, setCompanyList] = useState<CompaniesResponse>()

  async function getCompanies() {
    const response = await api.get<CompaniesResponse>("/companies");
    return setCompanyList(response.data)
  }

  useEffect(() => {
    getCompanies();
  }, [])

  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height="100%">
        <Header />
        <ParceirosCard {...companyList} />
      </Box>
    </>
  );
}
export default Parceiros;
