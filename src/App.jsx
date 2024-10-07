import './App.css'
import RandomGif from './components/RandomGif'
import Tags from './components/Tags'

function App() {

  return (
  
    <div className='w-full h-screen flex flex-col bg-green-200 relative overflow-x-hidden items-center'>
        <h1 className='bg-white rounded-sm  mt-[20px] w-11/12 mx-auto text-center'>RANDOM GIF</h1>
    
    <div className='w-full flex flex-col items-center gap-y-5 mt-[30px]'>
          <RandomGif></RandomGif>
          {/* <Tags></Tags> */}
          </div>
          </div>
  )
}

export default App
