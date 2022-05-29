import React from 'react'
import CoursesPart from './Courses-card-data/CoursesPart'

function Courses() {
  return (
    <div className="mt-4 py-3 ">
      <div class="container-fluit ">
        <div className="flash-secation text-center m-auto ">
          <h4>Courses</h4>
          <p><span>A Benevolent Contributor</span></p>
        </div>
      </div>
      <div class="container">
        <div className="row p-2 mt-5">
          <div className="col-md-7 m-auto">
            <h1>SI Mock Interview</h1>
            <h1>Utkarsh Classes - India's</h1>
            <h1> Best Institute For Comptetive Exams & School Courses</h1>
            <p>Utkarsh Institute - Best Learning platform to prepare Government
              Comptetive Exams along with Top Educators and Structured crash
              courses, mock tests and practice section.</p>
            <div>
              <img src="https://online.utkarsh.com/assets/images/app-store-btn.png" className='w-25' />
              <img src="https://online.utkarsh.com/assets/images/play-store-btn.png" className='w-25' />
              <img src="https://online.utkarsh.com/assets/images/windows.png" className='w-25' />
            </div>
          </div>
          <div className="col-md-5 coures-img p-2">

          </div>
        </div>
      </div>


      <CoursesPart />
    </div>
  )
}

export default Courses