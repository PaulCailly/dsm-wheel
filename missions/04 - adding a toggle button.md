## Adding a toggle button (Bonus)

## Instructions

- Add a new piece of state to the `App` component to keep track of whether the `NameList` or the `Wheel` should be displayed.
- This state should be a boolean and should be `true` by default (meaning the `Wheel` is displayed by default).
- Add a button that toggles this piece of state when clicked.
- Depending on the state, either the `NameList` or the `Wheel` should be rendered.

<details>
<summary>Solution</summary>

```jsx
function App() {
  const [names, setNames] = useState([
    "avizinho",
    "kpoisvert",
    "kschmitt",
    "mfessard",
    "nbonnot",
    "pcailly",
    "rdelombre",
    "scourjean",
    "skempf",
    "skim",
    "sretel",
    "tmanachem",
  ]);
  const [selectedNames, setSelectedNames] = useState<string[]>([])
  const [showWheel, setShowWheel] = useState<boolean>(true);

  const handleNameSelected = (name: string) => {
    setNames(names.filter((n) => n !== name));
    setSelectedNames([...selectedNames, name])
  }

  return (
    <div>
      <button onClick={() => setShowWheel(!showWheel)}>
        {showWheel ? "Show Names" : "Show Wheel"}
      </button>
      {showWheel ? (
        <Wheel names={names} />
      ) : (
        <NameList names={names} selectedNames={selectedNames} onNameSelected={handleNameSelected} />
      )}
    </div>
  );
}
```

</details>

## [< Previous mission](./03%20-%20styling%20the%20selected%20names.md)
