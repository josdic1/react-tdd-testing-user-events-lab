function Checkboxes({ checkboxState, onCheckbox }) {
    const onCheck = (e) => {
      const { name, checked } = e.target
      const updated = {
        ...checkboxState,
        [name]: checked
      }
      onCheckbox(updated)
    }
  
    return (
      <div id="checkboxes">
    <label><input type="checkbox" name="cbArt" /> Art</label>
<label><input type="checkbox" name="cbBurgers" /> Burgers</label>
<label><input type="checkbox" name="cbCars" /> Cars</label>
<label><input type="checkbox" name="cbDancing" /> Dancing</label>
     
      </div>
    )
  }
  
  export default Checkboxes