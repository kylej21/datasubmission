'use client'
import {useForm, Controller} from "react-hook-form";
import { TextField, Button, Callout } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import {useState} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { createSchema } from "@/app/createSchema";
import { useRouter } from "next/navigation";

interface IssueForm{
    title: string;
    description: string;
}

const submitPage = () => {
        // Code that uses the navigator object
      
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<IssueForm>({
        resolver: zodResolver(createSchema)
    });
    const [error,setError]= useState('');

    return (
    <div className = "justify-center">
        <div className="justify-start text-gray-700 text-4xl py-4">
            Submission Page
        </div>
        
        {error && <Callout.Root color = "red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
        <form className='space-y-3'
            onSubmit={handleSubmit(async (data)=>{
                try {
                    await axios.post('/api/issues',data);
                    console.log(data);
                } catch (error) {
                    setError('An unexpected error occured.');
                }

              })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')}/>
            </TextField.Root>
            {/*<Controller
                name="description"
                control= {control}
                render= {({field})=><SimpleMDE placeholder='Description' {...field}/>}
            />*/}
            <TextField.Root className="h-40">
                <TextField.Input placeholder='Description' {...register('description')}/>
            </TextField.Root>
            <Button>Submit Form</Button>
        </form>
    </div>
  )
            
}

export default submitPage