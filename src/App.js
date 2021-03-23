import {React,useState} from 'react';
import './App.css'

import SearchBar from './components/searchbar'
import ResultCard from './components/resultCard'

import { Button } from '@material-ui/core'

function App() {
  const [showResultCard,setShowResultCard] = useState(false)
  const [weChatID, setWechatID] = useState(null)
  const [reportedTimes, setReportedTimes] = useState(0);

  const handleIDChange=(e)=>{
    setShowResultCard(false)
    setWechatID(e.target.value)
  }

  const handleGetResultClick = ()=>{
    fetch('https://23ejmcuwcj.execute-api.ap-northeast-1.amazonaws.com/test1/getreportedcount',{
      method: 'POST',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        wechatID:weChatID
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log("if data is null")
      console.log(data == null)
      if('Item' in data){
        setReportedTimes(parseInt(data.Item.reportedNum.N))
      }else{
        setReportedTimes(0)
      }
      setShowResultCard(true)
    })
    .catch(console.log)
  }

  const handleReport = ()=>{
    fetch('https://23ejmcuwcj.execute-api.ap-northeast-1.amazonaws.com/test1/reportwechatid',{
      method: 'POST',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        wechatID:weChatID,
        idExistInDB:reportedTimes===0? false:true
      })
    })
    .then(res => res.json())
    .then(() => {
      alert("举报成功")
      setReportedTimes(reportedTimes+1)
    })
    .catch(console.log)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{position: 'absolute', top:'20%', left:'20%'}}>
          <SearchBar onChange={handleIDChange}/>
          <Button onClick={handleGetResultClick} variant="contained" style={{backgroundColor: "#202020",color:'white',width:'200px',height:'400px',left:'20px'}}>
            查黑名单
          </Button>
        </div>
        <div style={{position: 'absolute',left:'20%', visibility:showResultCard?'visible':'hidden'}}>
          <ResultCard
            weChatID = {weChatID}
            reportedTimes={reportedTimes}
            action={
              <Button onClick={handleReport}>
                点我举报
              </Button>
            }
          />
        </div>
      </header>
    </div>
  );
}

export default App;
