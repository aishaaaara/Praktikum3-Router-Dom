import React from 'react'

class kontak extends React.Component{
    render(){
        return(
            <div class="row">
                 <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> Address</h5>
                  <p class="card-text">Perumtas II Blok S-5 No.2 
                  <br></br> Tanggulangin, sidoarjo Jawa Timur</p>
                  <a href="" class="btn btn-primary">Go to GPS</a>
                </div>
              </div>
            </div>
            <br></br>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> School </h5>
                  <p class="card-text">Jl. Danau Ranau, Sawojajar
                  <br></br> Kec. Kedungkandang, Kota Malang, Jawa Timur 65139</p>
                  <a href="https://smktelkom-mlg.sch.id/" class="btn btn-primary">Go to Website</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">My Instagram</h5>
                  <p class="card-text">Follow me in Insagram to know more!!</p>
                  <a href="https://www.instagram.com/aishakwrd/" class="btn btn-primary">Go to Instagram</a>
                </div>
              </div>
            </div>
           
          </div>
        )
    }
}
export default kontak;