import React from 'react'

function Studentspt() {
    return (
        <div className='className="mt-4 py-3 "'>
            <div class="container-fluit ">

                <div className="flash-secation text-center ">
                    <h4 className='mt-3'>Student Support</h4>
                    <p><span>Student Support Portal</span></p>
                </div>
                <div class="container mt-2 mt-md-5 ">
                    <div className="row d-flex  justify-content-center mt-md-5">
                        <div className="col-md-5 about-list-p">
                            <h6 >Student Support Portal</h6>
                            <p>We are happy to help you</p>
                            <p>उत्कर्ष के ऑफ़लाइन/ऑनलाइन बैच के विद्यार्थियों के सुझावों/समस्याओं/जिज्ञासाओं के लिए</p>
                           <from  mathode ='post'>
                           <label typeof='text'>Mobile Number</label><br /><br />
                            <input type="number" className=' w-50 form-control' ></input><br /><br />
                            <label typeof='text'>Select Category</label><br /><br />
                            <select class="form-select form-select-sm w-50">
                                <option selected>Select Category</option>
                                <option value="1">online bach</option>
                                <option value="2">Offline bach</option>
                               
                            </select>
                            <button type='submit' className='btn btn-warning mt-3 py-1 px-4 '>Continue</button>
                           </from>

                        </div>
                        <div className="col-md-5 about-list-p ">
                            <h6>We are happy to help you</h6>
                            <p>Students who are studying in Offline/Online Batches at Utkarsh Institute, if you are facing any type of study related (Offline/Online Batch) problem, then you should inform us about your problem.</p>
                            <p>It will be our endeavour to solve your problem immediately. These issues may be related to content in app, class room, notification, app or of any kind, please let us know. Team Utkarsh will always be eager to help you.</p>
                            <br />
                            <p>उत्कर्ष संस्थान के ऑफलाइन/ऑनलाइन बैच में अध्ययन कर रहे विद्यार्थी अगर किसी भी प्रकार की अध्ययन संबंधी (ऑफलाइन/ऑनलाइन बैच) समस्या का अनुभव कर रहे हैं तो वे अपनी समस्या से हमें अवगत करावें।</p>
                            <p>हमारा सदैव प्रयास रहेगा कि आपकी समस्या का तुरन्त निस्तारण हो। ये समस्याएँ जैसे- एप्प में कंटेन्ट से संबंधित, कक्षा-कक्ष से संबंधित, नोटिफिकेशन से संबंधित, एप्प संबंधी या किसी अन्य प्रकार की हो  आप हमें अवश्य अवगत करावें टीम उत्कर्ष आपकी सहायता के लिए सदैव तत्पर रहेगी।</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Studentspt