import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import MainPage from './pages/MainPage';
import CountryPage from './pages/CountryPage';
import CountryForm from './pages/CountryForm';
import ProvincePage from './pages/ProvincePage';
import ProvinceForm from './pages/ProvinceForm';

import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';

import { CountryContextProvider } from './context/CountryContext/CountryProvider';
import { ProvinceContextProvider } from './context/ProvinceContext/ProvinceProvider';

function App() {
  return (
    <div className="h-screen w-screen m-0 bg-zinc-100">
      <Navbar />
      <div className="container mx-auto py-4 px-0 sm:px-18">
        <CountryContextProvider>
          <ProvinceContextProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/country" element={<CountryPage />} />
              <Route path="/country/new" element={<CountryForm />} />
              <Route path="/country/edit/:id" element={<CountryForm />} />
              <Route path="/country/details/:id" element={<CountryForm />} />"
              <Route path="/province" element={<ProvincePage />} />
              <Route path="/province/new" element={<ProvinceForm />} />
              <Route path="/province/edit/:id" element={<ProvinceForm />} />
              <Route path="/province/details/:id" element={<ProvinceForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProvinceContextProvider>
        </CountryContextProvider>
      </div>
    </div>
  );
}

export default App
