import './App.css';

function App() {
return (
<>

  <div class="banner">
    <div class="overlay">
<div class="container">
      <div class="row ">
        <div class="col-lg-6  mt-2"><img src="img/logo.png" width="100px"/></div>
        <div class="col-lg-6 mt-2 "><button class="btn btn-danger buton py-2 px-4 fl2 fl4 ">English</button>
          <button class="btn btn-danger fl1 ml-3 py-2 fl3">Sign in</button>

        </div>

      </div>
    </div>
<div class="row">
  <div class="col-lg-12 ">
    <h1 class="text-light text-center tex">
     <b> Unlimited movies, TV shows and more </b></h1>
     <h2 class="text-center text-light">Watch anywhere. Cancel anytime.</h2> 
     <h3 class="text-center text-light mt-4">Ready to watch? Enter your email to create or restart your membership.</h3>
     <div>
    <div class="row email mt-5">
      <div class="col-lg-4 ">  <form action="">
        <input type="email" class="form-control"placeholder="Email id"/>
        
      </form></div>
      <div class="col-lg-2 btn btn-danger mb-4">submit</div>
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

export default App;