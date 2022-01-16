import { Label } from "./Filter.styled";

export default function Filter({ filter, change }) {
  return (
    <Label>
      <p>Find contacts by name</p>
      <input type="text" name="found" value={filter} onChange={change} />
    </Label>
  );
}
