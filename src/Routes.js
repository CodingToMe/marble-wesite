import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';  
const RootPage =React.lazy(()=>import('./View/RootPage'));


const RenderRoutes = () => {
  return (
     <Suspense fallback={"loding..."} >
      <Routes>
      
          <Route path="/" element={<RootPage/>}></Route>


        {/* Public Routes */}
        {/* <Route path="/login" element={<RouteComponents.Login />} /> */}

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