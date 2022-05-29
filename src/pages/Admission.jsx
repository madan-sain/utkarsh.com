import React from 'react'
import Radiobtn from './Courses-card-data/Radiobtn'

function Admission() {
    return (
        <form>
        <div className="mt-4 py-3 ">
            <div class="container-fluit ">
                <div className="flash-secation text-center m-auto ">
                    <h4>Online Admission</h4>
                    <p><span>Admission from online</span></p>
                </div>
            </div>

            <div class="container mt-5 r">
                <div className="row d-flex justify-content-center">



                    <div className="col-4">

                       
                        <label for="exampleFormControlInput1" class="form-label">student name</label>
                        <input type="text" class="form-control mb-4" id="exampleFormControlInput1" placeholder="student name" required />
                        <label for="exampleFormControlInput1" class="form-label">phone number</label>
                        <input type="number" class="form-control mb-4" id="exampleFormControlInput1" placeholder="phone number" required />
                    </div>
                    <div className="col-4">
                       
                        <label for="exampleFormControlInput1" class="form-label">father name</label>
                        <input type="text" class="form-control mb-4" id="exampleFormControlInput1" placeholder="father name" required />
                        <label for="exampleFormControlInput1" class="form-label">mother name</label>
                        <input type="text" class="form-control mb-4" id="exampleFormControlInput1" placeholder="mother name" required />

                    </div>
                </div>

ram ram -- -- 

                <div class="row d-flex justify-content-center">
                    <div className="col-8">
                        <label for="exampleFormControlInput1" class="form-label">addresh</label>
                        <input type="text" class="form-control mb-4" id="exampleFormControlInput1" placeholder="addresh" required />
                        <label for="exampleFormControlInput1" class="form-label">email-id</label>
                        <input type="email" class="form-control mb-4" id="exampleFormControlInput1" placeholder="email-id" required />
                        <div className="row ">
                            <div className="col-6"><Radiobtn /></div>
                            <div className="col-4">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                    <option selected>Courses</option>
                                    <option value="1">NIELIT CHM 'O' Level Course	</option>
                                    <option value="2">PG Diploma in Data Science & Analytics</option>
                                    <option value="3"> 3rd Grade Teacher</option>
                                </select></div>
                        </div>


                    </div>
                </div>
                

<button type='sumbit' className='btn btn-warning w-100'>pay now</button>
            </div>


        </div>
        </form>
    )
}

export default Admission