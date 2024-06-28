import { useState, useCallback, useEffect,useRef } from 'react'
// import './App.css'

function App() {

  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // useCallback :-  Memorise function / when dependency in important 
  // UseEffect 
  //useRef hook :- when Reference needed

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefigklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])

  const copypasswordToclipBoard = useCallback(() => {

    passwordRef.current?.select()

    // passwordRef.current?.setSelectionRange(0,3)

    window.navigator.clipboard.writeText(password)
  } , [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setpassword])

  return (
    <>


      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center my-3 text-white'>
          Password Generator
        </h1>
        <div className=' flex text-orange-500 text-center rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copypasswordToclipBoard}
          className='bg-blue-500 text-white px-3 py-0.5 shrink-0 '
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
              
            />
            <label>length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='characterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
