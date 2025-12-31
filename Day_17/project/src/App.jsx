// import './App.css'
// import React from 'react'

// function App() {

//   const [amount,setAmount] = React.useState()
//   const [per,setPer] = React.useState()
//   const [result,setResult] = React.useState()

//   const InGst = () => {
//     if (!amount || !per) {
//       alert('Please enter amount and percentage')
//       return
//     }
//     let gst = ( parseInt(amount) * parseInt(per)) / 100
//     let withgst = parseInt(amount) + gst
//     setResult(withgst)

//   }

//   const ExGst = () => {
//       if (!amount || !per) {
//       alert('Please enter amount and percentage')
//       return
//     }
//     let withoutgst = parseInt(amount)-(parseInt(amount) - (parseInt(amount)  * (100 / (100 + parseInt(per)))))
//     setResult(withoutgst)
//   }

//   return (
//     <>
//     <h1>GST Calculator</h1> <br /> 
//       Amount : <input type="text" placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}  /> <br /><br />
//       {/* Percentage : <input type="text" placeholder='Enter Percentage' onChange={(e)=>setPer(e.target.value)}  /> <br /><br /> */}

//       Percentage : 
//       <input type="radio" name="option" value='0' onClick={(e)=>setPer(e.target.value)}/>0%
//       <input type="radio" name="option" value='5' onClick={(e)=>setPer(e.target.value)} />5%
//       <input type="radio" name="option" value='18' onClick={(e)=>setPer(e.target.value)}/>18%
//       <input type="radio" name="option" value='40' onClick={(e)=>setPer(e.target.value)}/>40%
//       <br /><br />

//       <input type="button" value="Include GST" onClick={InGst} />
//       <input type="button" value="Exclude GST" onClick={ExGst} />
//       <h3>{result}</h3>

//     </>
//   )
// }

// export default App



// red alert 
import './App.css'
import React from 'react'

function App() {

  const [amount, setAmount] = React.useState()
  const [per, setPer] = React.useState()
  const [result, setResult] = React.useState()
  const [error, setError] = React.useState("")

  const InGst = () => {
    if (!amount || !per) {
      setError("Please enter amount and percentage")
      return
    }

    setError("")
    let gst = (parseInt(amount) * parseInt(per)) / 100
    let withgst = parseInt(amount) + gst
    setResult(withgst)
  }

  const ExGst = () => {
    if (!amount || !per) {
      setError("Please enter amount and percentage")
      return
    }

    setError("")
    let withoutgst =
      parseInt(amount) -
      (parseInt(amount) -
        parseInt(amount) * (100 / (100 + parseInt(per))))
    setResult(withoutgst)
  }

  return (
    <>
      <h1>GST Calculator</h1> <br />

      Amount :
      <input
        type="text"
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />

      Percentage :
      <input type="radio" name="option" value="0" onClick={(e) => setPer(e.target.value)} />0%
      <input type="radio" name="option" value="5" onClick={(e) => setPer(e.target.value)} />5%
      <input type="radio" name="option" value="18" onClick={(e) => setPer(e.target.value)} />18%
      <input type="radio" name="option" value="40" onClick={(e) => setPer(e.target.value)} />40%
      <br /><br />

      <input type="button" value="Include GST" onClick={InGst} />
      <input type="button" value="Exclude GST" onClick={ExGst} />

      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <h3>{result}</h3>
    </>
  )
}

export default App
