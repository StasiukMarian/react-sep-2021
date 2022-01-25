import React from 'react';
import {useForm} from "react-hook-form";

const FormHook = () => {
    let {register, handleSubmit} = useForm()
        const onSubmitForm = (e)=>{
            console.log(e)
        }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type="text" {...register('username')} defaultValue={''}/>
                <input type="text" {...register('age')} defaultValue={''}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormHook;