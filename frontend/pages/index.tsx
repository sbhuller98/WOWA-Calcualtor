import Head from 'next/head';
import HomeCalculator from 'src/HomeCalculator';
import SampleInput from 'src/InputFields/SampleInput';
import SampleSelectField from 'src/InputFields/SampleSelectField';
import AsyncDataComponent from '../src/AsyncDataComponent';

import MortgageSelector from 'src/MortgageSelector'


import { ReactElement } from 'react'
import { faCanadianMapleLeaf }  from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
      </Head>
      <main className="w-full flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-semibold mb-4 text-center">
          Canadian Mortgage Calculator
          
        </h1>{' '}
        <div className="text-lg text-center">
          WOWA <FontAwesomeIcon icon={faCanadianMapleLeaf} className=" text-red-500"/>
        </div>
        <div className="flex flex-col items-center justify-start pt-20">< MortgageSelector /></div>
      </main>
    </>
  );
};

export default Home;
