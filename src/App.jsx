
import './App.css'

function App() {
  
let ism=prompt("Ism kiriting:");
const vaqt=new Date();
let kun=vaqt.getDate();
let oy=vaqt.getMonth();
let yil=vaqt.getFullYear();
let son=Math.floor(Math.random()*90+10);   
let soat=vaqt.getHours()
  return (
    <div style={{backgroundColor:soat>8&&soat<18?"white":"black"}} >
     <div className="box">
      <h2>Siznig ismingiz: <span> {ism}</span></h2>
      <h2>Bugungi kun: <span>{kun}. {oy}. {yil}</span></h2>
<h2>random son: <br /> <p className='random'>{son}</p></h2>
     </div>
    </div>
  )
}

export default App
