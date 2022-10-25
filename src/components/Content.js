import React from 'react'
import '../components/Content.css'
import visaPhoto from '../assets/294654_visa_icon.png'


const Content = ({data}) => {
   
  return (
    <div className='main-side'>
        <div className="row" style={{marginTop:"4%"}}>
            <div className="col-sm-7 left-side">
                <h1 style={{color:"#1D1C4E"}}><b>Billing</b></h1>

                <h5 className='mt-5' style={{color:"#1D1C4E"}}><b>Order History</b></h5>
                <p style={{color: "#7E7DA4"}}>Manage billing information and view receips</p>

                <table className="table table-striped-rows table-hover mt-5">
                        <thead >
                          <tr>
                            <th style={{color: "#7E7DA4"}} scope="col">Date</th>
                            <th style={{color: "#7E7DA4"}} scope="col">Type</th>
                            <th style={{color: "#7E7DA4"}} scope="col">Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" style={{color:"#1D1C4E"}}>Oct.21,2021</th>
                            <th style={{color:"#1D1C4E"}}>Pro Annual</th>
                            <button style={{border:"1px black solid"}} type="button" className="btn btn-light ms-2 btn-sm">Download</button>
     
                          </tr>
                          <tr>
                            <th style={{color:"#1D1C4E"}} scope="row">Aug.21,2021</th>
                            <th style={{color:"#1D1C4E"}}>Pro Portfolio</th>
                            <button style={{border:"1px black solid"}} type="button" className="btn btn-light ms-2 btn-sm">Download</button>
                          </tr>
                          <tr>
                            <th style={{color:"#1D1C4E"}} scope="row">July.21,2021</th>
                            <th style={{color:"#1D1C4E"}}>Sponsored Post</th>
                            <button style={{border:"1px black solid"}} type="button" className="btn btn-light ms-2 btn-sm">Download</button>
             
                          </tr>
                          <tr>
                            <th style={{color:"#1D1C4E"}} scope="row">Jun.21,2021</th>
                            <th style={{color:"#1D1C4E"}}>Sponsored Post</th>
                            <button style={{border:"1px black solid"}} type="button" className="btn btn-light ms-2 btn-sm">Download</button>
             
                          </tr>
                        </tbody>
                      </table>
                <p className='mt-3' ><a style={{color:'#EF6453'}} href="#"><b>Load More</b></a></p>
                <h5 style={{marginTop:"20%",color:"#1D1C4E"}} ><b>Payment Method</b></h5>
                <p style={{color: "#7E7DA4"}}>Manage billing information and view receips</p>
                <tr>
                    <th scope="row"><img style={{width:"80px"}} src={visaPhoto} alt="V"/></th>
                    <td><b style={{color:"#1D1C4E"}} className='ms-3'>Visa ending in {data.visa}</b></td>
                    <button style={{marginLeft:"250%",border:"1px black solid"}} type="button" className="btn btn-light">Remove</button>
                </tr>
            </div>

            <div className="col-sm-4">
                <div className="box">
                    <p style={{color:"#fff"}}>Your plan</p>
                    <h1 style={{color:"#fff"}}>Pro Annual</h1>
                    <p style={{color:"#fff"}} >Renews on Nov.2021</p>
                    <button style={{border:"1px #fff solid", background:"#EE4D38"}} type="button" className="btn btn-danger">Cancel subscription</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content