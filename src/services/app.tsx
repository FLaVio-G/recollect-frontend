import { Card, Stack, CardBody, Heading, color } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import axios from "axios";
import React, { useEffect, useState } from "react";
import api from './api'

interface Company {
  companies: Array<{companyName: string}>;
}

export default function App() {
  const [company, setCompany] = useState();

  useEffect(() => {
    api
      axios.get("/companies")
      .then((response) =>{
        // console.log(response.data) 
        setCompany(response.data)
      } )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
  return (
    
    <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            {/* <Image
              objectFit='cover'
              maxW={{ base: '100%', md: '400px' }}
              src={parceiros02}
              alt='Caffe Latte'
            /> */}

            <Stack>
              <CardBody className="texto-descritivo-empresa">
                {/* <Heading color='white' mb='4'> {company?.companies?.[0].companyName} </Heading> */}

                <Text py='2' color='white'>
                  feugiat scelerisque varius morbi enim nunc faucibus a pellentesque
                  sit amet porttitor eget dolor morbi non arcu risus quis varius quam
                  quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse
                  faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing
                  elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi
                </Text>
              </CardBody>
            </Stack>
          </Card>
  );
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = 'https://api-recollect.onrender.com/companies';

// function DataFetcher() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);
// return (
//     <div>
//       <ul>
//         {data.map(Company => (
//           <li key={Company.companyName}>{Company.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataFetcher;