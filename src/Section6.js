import './App.css';

import F1 from './F1';
import F2 from './F2';
import F3 from './F3';
import F4 from './F4';
import F5 from './F5';
import F6 from './F6';


function Section6() {
return (
<>
<div class="ban">
    <div class="row dark">
        <div class="col-lg-12 text-center text-light mt-5 mb-5">
            <h1><b>Frequently Asked Questions</b></h1>
        </div>

    </div>
<div class="row dark">
    <div class="container ">
        <div class="row ">
            <div class="col-lg-12">
                <h3 class="text-light bgg py-4"onClick={F1}>What is Netflix</h3>
                <p id='show' className='text-light'></p>
                
                <h3 class="text-light bgg py-4" onClick={F2}>Where can I watch?</h3>
                <p id='show2' className='text-light'></p>
                <h3 class="text-light bgg py-4" onClick={F3}>How do I cancel?</h3>
                <p id='show3' className='text-light'></p>
                <h3 class="text-light bgg py-4" onClick={F4}>What can I watch on Netflix?</h3>
                <p id='show4' className='text-light'></p>
                <h3 class="text-light bgg py-4" onClick={F5}>Is Netflix good for kids?</h3>
                <p id='show5' className='text-light'></p>
                <h3 class="text-light bgg py-4" onClick={F6}>How much does Netflix cost?</h3>
                <p id='show6' className='text-light'></p>
                <h3 class="text-light text-center mt-4">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div class="row email mt-5 mb-5">
                    <div class="col-lg-4 ">  <form action="">
                      <input type="email" class="form-control" placeholder="Email id"/>
                      
                    </form></div>
                    <div class="col-lg-2 btn btn-danger" >submit</div>
                  </div>
            </div>
            
        </div>
    </div>
</div>





</div>
    <div class="line"></div>
</>
);
}

export default Section6;