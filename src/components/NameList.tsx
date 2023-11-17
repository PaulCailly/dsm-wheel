import { FC } from "react";

type NameListProps = {
    names: string[];
    selectedNames: string[];
    onNameSelected: (name: string) => void;
}

const NameList: FC<NameListProps> = ({ names, selectedNames, onNameSelected }) => {
    return (
        <ul>
            {names.map(name => {
                return (
                    <li key={name} className={selectedNames.includes(name) ? "selected" : ""}>
                        <input type="checkbox" onChange={() => onNameSelected(name)}
                        />
                        {name}
                    </li>
                )
            })}
        </ul>
    )
}

export default NameList