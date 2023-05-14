import './App.css';

function App() {
  return (
    <div className="App">

      <ul>
        {Names.map(nam => <li>{nam}</li>)}
      </ul>

      <div>
        {person1Details.map(details => <h1>{details.name}</h1>)}
      </div>

      <div id='hard'>
        <Product product={productDetails[0]}></Product> 
        <Product product={productDetails[1]}></Product>
        <Product product={productDetails[2]}></Product>
        <Product product={productDetails[3]}></Product>
        <Product product={productDetails[3]}></Product>
        <Product product={productDetails[3]}></Product>
        
      </div>

      

      {/* medium level dynamic data pass */}



      <div id='medium'>
          <Person2 name={Array[0].name} idNo={Array[0].idNo} details={Array[0].details}></Person2>
          <Person2 name={Array[1].name} idNo ={Array[1].idNo} details= {Array[1].details}></Person2>
          <Person2 name={Array[2].name} idNo ={Array[2].idNo} details= {Array[2].details}></Person2>
      </div>

      

      {/* low level dynamic data pass */}


      <div id='low'>
        <Person name="Abdul Alim" idNo="122" details="Hi is a good boy."></Person>
        <Person name="Abdul Halim" idNo="222" details="Hi is a talented boy."></Person>
        <Person name="Abdul Jabbar" idNo="322" details="Good boy with good nature"></Person>
        <Person name="Masud Rana" idNo="422" details="Not a good boy and lazy too much."></Person>
        <Person name="Sabbir Rahman" idNo="522" details="Extra-ordinary guy. "></Person>
        <Person name="Belal Uddin" idNo="622" details="Very tall and businessman. "></Person>
      </div>
      
    </div>
  );
}

const Names = ['Abdul Alim', 'Sabbir', 'Ismail', 'Ibrahim', 'Josim', 'Belal Uddin']; 

const person1Details = [
  { name:"Abdul Alim", idNo:"122", details:"Hi is a good boy." },
  { name: "Abdul Halim", idNo: "55", details: "Hi is a talented boy." },
  { name: "Abdul Jabba", idNo: "2556622", details: "Hi is a talented boy." },
  { name: "Abdul Halim", idNo: "88", details: "Hi is a talented boy." },
  { name: "Abdul Halim", idNo: "229992", details: "Hi is a talented boy." },
  { name: "Abdul Halim", idNo: "22002", details: "Hi is a talented boy." },
]; 



//high level dynamic data pass 
const productDetails = [
  { name: 'Photoshop', price: '$99.99' },
  { name: 'Illutrator', price: '$69.99' },
  { name: 'PDF Reader', price: '$9.99' },
  { name: 'Windows', price: '$999.99' }
]


function Product(props) {
  const productStyle = {
    color: 'gray',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    border : '1px solid red',
    padding: '10px',
    height: '200px',
    width: '200px',
    margin: '2px',

    
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}






//medium level dynamic data pass

const Array = [
  { name: 'aaaaa', idNo: '111', details: 'aaaaaaaaaaaaaaaaaa' },
  { name: 'bbbbbb', idNo: '222',details: 'bbbbbbbbbbbbbbb' },
  { name: 'ccccc', idNo: '333', details: 'cccccccccccccccc' },
  
]
function Person2(props) {
  const Person2Style = {
    color: 'red',
    backgroundColor: 'black',
    padding: '10px',
    margin: '10px',
    border : '2px solid yellow',
  }
  return (
    <div style={Person2Style}>
      <h1> Name : {props.name}</h1>
      <h3> ID : {props.idNo}</h3>
      <h5> Details : {props.details}</h5>
    </div>
  )
}







//low level dynamic data pass

function Person(props) {
  const personStyle = {
    color: 'red',
    backgroundColor: 'black',
    padding: '10px',
    margin: '10px',
    border : '2px solid yellow',
  }
  return (
    <div style={personStyle}>
      <h1> Name : {props.name}</h1>
      <h3> ID : {props.idNo}</h3>
      <h5> Details : {props.details}</h5>
    </div>
  )
}


export default App;
