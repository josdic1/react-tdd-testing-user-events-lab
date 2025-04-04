function NameInput({ onNameInput }) {



    return (
    <>
            <label htmlFor="nameInput">Name: </label>
    <input 
    type="text" 
    id="nameInput" 
    name="nameInput" 
    placeholder="Name..." 
    onInput={(e) => onNameInput(e.target.value)}
    />
    </>
    )}
    
    export default NameInput
    