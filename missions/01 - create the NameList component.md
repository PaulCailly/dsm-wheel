## Create the NameList component

## Instructions

- Create a new component called `NameList`.
- This component should take two props: a list of names and a callback function to call when a name is selected.
- The component should return a list (`ul`) of items (`li`). Each item should contain a checkbox (`input`) and a name.

<details>
<summary>Solution</summary>

```jsx
type NameListProps = {
  names: string[],
  onNameSelected: (name: string) => void,
};

const NameList: FC<NameListProps> = ({ names, onNameSelected }) => {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>
          <input type="checkbox" onChange={() => onNameSelected(name)} />
          {name}
        </li>
      ))}
    </ul>
  );
};
```

</details>

## [Next mission >](./02%20-%20adding%20state%20to%20App%20component.md)
