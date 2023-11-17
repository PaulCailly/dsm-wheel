import './App.css'
import Wheel from './components/Wheel'
import NameList from "./components/NameList"
import { useState } from 'react'

function App() {
  const initialNames = ['avizinho', "kpoisvert", "kschmitt", "mfessard", "nbonnot", "pcailly", "rdelombre", "scourjean", "skempf", "skim", "sretel", "tmanachem"]
  const [names, setNames] = useState(initialNames)
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const handleNameSelected = (name: string) => {
    setNames(names.filter(n => n !== name))
    setSelectedNames([...selectedNames, name])
  }

  return (
    <>
      <div>
        <NameList names={initialNames} selectedNames={selectedNames} onNameSelected={handleNameSelected} />
        <Wheel names={names} />
      </div>
    </>
  )
}

export default App
