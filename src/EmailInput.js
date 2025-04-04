
function EmailInput({onEmailInput}) {

    return (
        <>
        <label htmlFor="emailInput">Email: </label>
        <input 
        type="email" 
        id="emailInput" 
        name="emailInput" 
        placeholder="Email..." 
        onInput={(e) => onEmailInput(e.target.value)}
        />
        </>
        )}

    export default EmailInput