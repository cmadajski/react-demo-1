import React from "react"

export default function TestForm(props) {

    // instead of saving state in individual variables, we can hold everything in an object
    const [formData, setFormData] = React.useState({firstName: "", lastName: ""})

    // all the onAction functions return an event object that contains lots of data
    // we can 
    function updateFormOnChange(event) {
        setFormData((prevFormData) => {
            return {
                // use spread operator to fill new object with all previous state values
                ...prevFormData,
                // we can overwrite one piece of the old data with the new data
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData)

    return (
        <form>
            <input type="text" name="firstName" placeholder="First name" onChange={updateFormOnChange} value={formData.firstName} />
            <input type="text" name="lastName" placeholder="Last name" onChange={updateFormOnChange} value={formData.lastName} />
        </form>
    )
}