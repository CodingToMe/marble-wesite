import React from 'react'

const Loader = () => {
  return (
    <div class="d-flex justify-content-center">
  <div class="spinner-border text-success" role="status" style={{width:"3rem",height:"3rem"}}>
    <span class="sr-only"></span>
  </div>
</div>
  )
}

export default Loader