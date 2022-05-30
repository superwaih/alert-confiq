import React, { useState } from 'react'
import Select from 'react-select'

const TableRow = ({dataName, data, newRow, setnewRow, independent, dependent, freq}) => {
    const [formData, setFormData] = useState({
        alertName: '',
        indep_option: [],
        dep_options: [],
        frequency: ''

    })
    const {alertName,
        indep_option,
        dep_options,
        frequency

    } = formData

    const [newInput, setnewInput] = useState('')
    const[newFrequency, setNewFrequency] = useState(null)
   

    const onChange = (e)=>{
        setFormData((prevState) => ({
          ...prevState, 
          [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = () =>{
        const pref = {newInput, indep_option, dep_options, newFrequency}
        console.log(pref)
        console.log("data saved")
    }
    


    
    const independent_options = [
        { value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },
        { value: 'Rate of Return (Avg.)', label: 'Rate of Return (Avg.)' }
    ]
    

    const dependent_options = [
        { value: 'ME Shaft Power (Avg.)', label: 'ME Shaft Power (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },

    ]
    const handleDelete = ({id}) =>{
        setnewRow(newRow.filter((row) => row.id !== id))
    }
    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(data)} className='btn-del' >x</button>
            </td>
            <td className='td-name'>
                <input name='alertName' onChange={(e) => setnewInput(e.target.value)} defaultValue={dataName} type="text"  />
            </td>
            <td>
                <Select name='indep_option' onInputChange={indep_option}   defaultValue={[independent[0], independent[1]]}  
                isMulti options={independent_options} />
            </td>
            <td>
                <Select
                name='dep_options'
                defaultValue={dependent}
                onInputChange={dep_options}
                options={dependent_options} />
            </td>

            <td>
                <input name='freq'  className='freq' onChange={(e) => setNewFrequency(e.target.value) } placeholder='min' type="number" defaultValue={freq} />
            </td>
            <td>
                <button onClick={handleSubmit} type='submit' className='save-btn' >
                    save
                </button>
            </td>
        </tr>
    
    )
}

export default TableRow