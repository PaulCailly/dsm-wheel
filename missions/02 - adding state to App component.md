## Adding state to the App component

## Instructions

- Add a new piece of state to the `App` component to keep track of which names have been selected.
- When a name is selected, it should be removed from the list of names.

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

  const handleNameSelected = (name: string) => {
    setNames(names.filter((n) => n !== name));
  };

  return (
    <div>
      <NameList names={names} onNameSelected={handleNameSelected} />
      <Wheel names={names} />
    </div>
  );
}
```

</details>

## [< Previous mission](./01%20-%20create%20the%20NameList%20component.md)

## [Next mission >](./03%20-%20styling%20the%20selected%20names.md)
