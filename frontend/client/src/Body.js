import React,{useState} from 'react';
const Body = ({candidate1,candidate2,votecandidate,account}) => {
 const[Candidate,setCandidate] = useState(""); 
 const onchange = (e)=>{
   setCandidate(e.target.value);
   console.log(e.target.value);
 }
 const onsubmit = (e)=>{
  //  console.log("On submit");
   e.preventDefault();
   if(Candidate.id !== 0)votecandidate(Number(Candidate));
   else window.alert("There is error in Submission");
 }
 return(
  <div className='my-4 text-center' style={{color:"#000000"}}>
    <h2>Election Results</h2>
    <hr
     style={{
         width:"70%",
         borderStyle:"solid",
         borderStyle:"2px",
         borderColor:"#000000",
     }}
    />
    <div className='p-3 ml-auto mr-auto' style={{width:"40%"}}>
     <div className='row ml-auto mr-auto mb-2' style={{width:"90%"}}>
       <div className='col'>
         <p>#</p>  
       </div>
       <div className='col'>
          <p>Name</p>  
       </div>
       <div className='col'>
           <p>Votes</p> 
       </div>  
     </div>   
    </div>
    <hr
     style={{width:"90%",borderStyle:"solid",borderColor:"#000000"}}
    />
    <div
     className='row ml-auto mr-auto mb-2'
     style={{width:"35%"}}
    >
     <div className='col'>
       <p>{candidate1.id}</p>  
     </div>
     <div className='col'>
        <p>{candidate1.name}</p> 
     </div>
     <div className='col'>
        <p>{candidate1.votecount}</p> 
     </div>   
    </div>
    <hr
     style={{width:"90%",borderStyle:"solid",borderColor:"#000000"}}
    />
    <div
     className='row ml-auto mr-auto mt-2 mb-2'
     style={{width:"35%"}}
    >
     <div className='col'>
      <p>{candidate2.id}</p>
     </div>
     <div className='col'>
      <p>{candidate2.name}</p>  
     </div>
     <div className='col'>
      <p>{candidate2.votecount}</p>  
     </div>
    </div>
    <div className='my-5 mr-auto ml-auto text-left' style={{width:"70%"}}>
     <h5>Cast Your Vote:</h5>
     <form onSubmit={onsubmit}>
       <select name="candidate" className='form-control' onChange={onchange}>
         <option>
           Select
         </option>
         <option value="1">{candidate1.name}</option>
         <option value="2">{candidate2.name}</option>
       </select>
       <button className='btn btn-primary mt-2 btn-md w-100'>
        Vote Candidate{" "}
       </button>
     </form>
    </div>
    <p className='my-5'>
     Your address:<span className='font-weight-bold'>{account}</span>
    </p>
  </div>
 );
};

export default Body;
