import './App.css'
import Wheel from './components/Wheel'

function App() {
  const names = ['avizinho', "kpoisvert", "kschmitt", "mfessard", "nbonnot", "pcailly", "rdelombre", "scourjean", "skempf", "skim", "sretel", "tmanachem"]

  return (
    <>
      <div>
        <Wheel names={names} />
      </div>
    </>
  )
}

export default App
