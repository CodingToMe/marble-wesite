import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';  
const RootPage =React.lazy(()=>import('./View/RootPage'));
const MarbleMandir = React.lazy(()=>import('./Components/Products/MandirSection'))
const Fountain =React.lazy(()=>import('./Components/Products/Fountain'))
const HomeOfficeDecor =React.lazy(()=>import('./Components/Products/HomeOfficeDecor'))
const FlowerPotsAndVases =React.lazy(()=>import('./Components/Products/FlowerPotsAndVases'))


const RenderRoutes = () => {
  return (
     <Suspense fallback={"loding..."} >
      <Routes>
      
          <Route path="/" element={<RootPage/>}></Route>


        {/* Public Routes */}
        <Route path="/marble-mandir" element={<MarbleMandir/>} />
        <Route path="/fountain" element={<Fountain/>} />
        <Route path="/home-office-decor" element={<HomeOfficeDecor/>} />
        <Route path="/flower-pots" element={<FlowerPotsAndVases/>} />

        {/* 404 fallback if permissions are loaded */}
        {/* {isLoaded && (
          <Route path="*" element={<PrivateRoute Component={RouteComponents.PageNotFound} />} />
        )} */}
      </Routes>

      {/* <CustomToast /> */}
    </Suspense>
  )
}

export default RenderRoutes