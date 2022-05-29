import React from 'react'

function Contact() {
    return (
        <div className="mt-4 py-3 ">
            <div class="container-fluit ">
                <div className="flash-secation text-center m-auto ">
                    <h4>Contact Us</h4>
                    <p><span>Admission from online</span></p>
                </div>
            </div>


            <div class="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">

                      <form >
                      <label for="exampleFormControlInput1" class="form-label">name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" required/>


                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>

                        <label for="exampleFormControlTextarea1" class="form-label">message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>

                        <button className='btn btn-primary py-1 px-3 mt-3'>send</button>
                      </form>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact