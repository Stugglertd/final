import React,{useEffect,useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar"
import Body   from './Body';
// import Web3 from "./getWeb3";
import Electionabi from './contracts/Election.json';
function App(){
  useEffect(() => {
    // loadWeb3();
    LoadBlockchaindata();
  },[])
  const[Currentaccount,setCurrentaccount] = useState("");
  const[loader,setloader] = useState(true);
  const[Electionsm,setElectionsm] = useState({});
  const[Candidate1,setCandidate1] = useState({});
  const[Candidate2,setCandidate2] = useState({});
  // const loadWeb3 = async () => {
  //  if(window.ethereum){
  //   // window.web3 = new Web3(window.ethereum);
  //   await window.ethereum.enable();
  //  }
  //  else if(window.web3){
  //   window.web3 = new Web3(window.web3.currentProvider);
  //  }
  //  else{
  //   window.alert(
  //    "Non-Ethereum browser detected. You should trying MetaMask!"
  //   );
  //  }
  // };
  const LoadBlockchaindata = async()=>{
    let Web3 =require("web3");
    let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
    window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        console.log(accounts[0])
        setCurrentaccount(accounts[0]);
    });
    
    // const accounts = await web3.eth.getAccounts();
    // setCurrentaccount(accounts[0]);
    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];
    // console.log(Currentaccount);
    if(networkData){
     let election = new web3.eth.Contract(Electionabi.abi,networkData.address);
     setElectionsm(election);
     const candidate1 = await election.methods.candidates(1).call();
    //  const candidate1id = candidate1.id;
    //  const candidate1name = candidate1.name;
    //  const candidate1votecount = candidate1.votecount; 
     setCandidate1(candidate1);
     let candidate2 = await election.methods.candidates(2).call();
    //  const candidate2id = candidate2.id;
    //  const candidate2name = candidate2.name;
    //  const candidate2votecount = candidate2.votecount;
     setCandidate2(candidate2);
     setloader(false);
    //  console.log(candidate1id)
    //  console.log(candidate2name);
    //  console.log(candidate2votecount);
    }
    else{
      window.alert('The smart contract is not deployed current network');
    }
  }
  const votecandidate = async(candidateid)=>{
    setloader(true);
    await Electionsm.methods.Vote(candidateid)
    .send({from:Currentaccount})
    .on('transactionhash',()=>{
      console.log("Successfully ran");
    })
    setloader(false);
  }
  return(
    <div>
     <Navbar account={Currentaccount}/>
     <Body candidate1={Candidate1}
      candidate2={Candidate2} 
      votecandidate={votecandidate}
      account={Currentaccount}/>
    </div>
  );
}

export default App;