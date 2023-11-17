## Styling the selected names

## Instructions

- Add some CSS to strike through the names that have been selected.
- This can be done by adding a selected class to the `li` element when the checkbox is checked, and defining a CSS rule to strike through the text of li elements with the selected class.

<details>
<summary>Solution</summary>

```jsx
const NameList: FC<NameListProps> = ({ names, onNameSelected }) => {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const handleNameSelected = (name: string) => {
        setSelectedNames([...selectedNames, name]);
        onNameSelected(name);
    }

    return (
        <ul>
            {names.map(name => (
                <li key={name} className={selectedNames.includes(name) ? 'selected' : ''}>
                    <input type="checkbox" onChange={() => handleNameSelected(name)} />
                    {name}
                </li>
            ))}
        </ul>
    );
}
```

```css
.selected {
  text-decoration: line-through;
}
```

</details>

## [< Previous mission](./02%20-%20adding%20state%20to%20App%20component.md)

## [Next mission >](./04%20-%20adding%20a%20toggle%20button.md)
