import React, {useState} from 'react';

const Form = () => {
    let [formState, setFormState] = useState({username: '', age: ''})
    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(e.target.username.value);
        console.log(e.target.age.value);
        console.log(formState)
    }
    const onChangeForm = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})

    }

    return (

        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text"
                       name={'username'}
                       value={formState.username}
                       onChange={onChangeForm}/>

                <input type="number"
                       name={'age'}
                       value={formState.age}
                       onChange={onChangeForm}
                />
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;