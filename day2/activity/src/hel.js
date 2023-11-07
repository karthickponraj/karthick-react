 import './Asset/css/style.css';
 import {Activity} from 'lucide-react';
 import {User} from 'lucide-react';
 function run()
 {
  alert('form submitted');
 }
 function aa()
 {
  document.getElementById('s1').style.backgroundColor='white';
 }
 function ab()
 {
  document.getElementById('s1').style.backgroundColor='whitesmoke';
 }
 function aa1()
 {
  document.getElementById('s2').style.backgroundColor='white';
 }
 function ab1()
 {
  document.getElementById('s2').style.backgroundColor='whitesmoke';
 }
 function aa2()
 {
  document.getElementById('s3').style.backgroundColor='white';
 }
 function ab2()
 {
  document.getElementById('s3').style.backgroundColor='whitesmoke';
 }
 function aa3()
 {
  document.getElementById('s4').style.backgroundColor='white';
 }
 function ab3()
 {
  document.getElementById('s4').style.backgroundColor='whitesmoke';
 }
 function aa4()
 {
  document.getElementById('s5').style.backgroundColor='white';
 }
 function ab4()
 {
  document.getElementById('s5').style.backgroundColor='whitesmoke';
 }
 const Hel= () => {
  return (
    <div >
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
      <form style={{justifyContent:'center',display:'flex',flexDirection:'column',width:'30%',alignItems:'center'}} className='mo'>
        <h1 className='a1'>REGISTRATION FORM<User size={40} color='red' strokeWidth={1}/></h1>
        <label><b>NAME : </b></label>
        <input type='text' id ='s1' placeholder="name" onFocus={aa} onBlur={ab} width='60%'className='r'></input>
        <br/>
        <label><b>ROLL No : </b></label>
        <input type='text' id='s2' placeholder="roll no" onFocus={aa1} onBlur={ab1} className='r'></input>
        <br/>
        <label><b>EMAIL : </b></label>
        <input type='email' id='s3' placeholder="email" onFocus={aa2} onBlur={ab2}className='r'></input>
        <br/>
        <label><b>CONTACT NUMBER : </b></label>
        <input type='text' id='s4' placeholder="phone number" onFocus={aa3} onBlur={ab3} className='r'></input>
        <br/>
        <label><b>Date of Birth : </b></label>
        <input type='date' id='s5' placeholder="dob" onFocus={aa4} onBlur={ab4} className='r'></input>
        <br/><br/><br/>
        <button type='submit' value='click here to submit' onClick={run} className='ll'><Activity size={25} color="red" strokeWidth={1}/>Submit</button>
      </form>
      </div>
    </div>
  )
}
export default Hel;