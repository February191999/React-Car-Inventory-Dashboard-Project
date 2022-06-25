import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseCarOwner, chooseCarMake, chooseCarModel, chooseOwnerPhoneNumber } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    car_owner: string;
    car_make: string;
    car_model: string;
    owner_phone_number: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const name = useSelector<CarState>(state => state.car_make);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseCarOwner(data.car_owner));
            dispatch(chooseCarMake(data.car_make));
            dispatch(chooseCarModel(data.car_model));
            dispatch(chooseOwnerPhoneNumber(data.owner_phone_number));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="car_owner">Car Owner</label>
                    <Input {...register('car_owner')} name="car_owner" placeholder='Car Owner'/>
                </div>
                <div>
                    <label htmlFor="car_make">Car Make</label>
                    <Input {...register('car_make')} name="car_make" placeholder='Car Make'/>
                </div>
                <div>
                    <label htmlFor="car_model">Car Model</label>
                    <Input {...register('car_model')} name="car_model" placeholder='Car Model'/>
                </div>
                <div>
                    <label htmlFor="owner_phone_number">Phone Number</label>
                    <Input {...register('owner_phone_number')} name="owner_phone_number" placeholder='Phone Number'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}