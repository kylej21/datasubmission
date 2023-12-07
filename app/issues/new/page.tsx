'use client'
import {useForm, Controller} from "react-hook-form";
import { TextField, Button, Callout } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import react, {useState} from "react";
import { useRouter } from "next/navigation";
import { Calligraffitti } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { createSchema } from "@/app/createSchema";
interface IssueForm{
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<IssueForm>({
        resolver: zodResolver(createSchema)
    });
    const [error,setError]= useState('');

    return (
    <div className = "max-w-xl">
        {error && <Callout.Root color = "red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
        <form className='space-y-3'
            onSubmit={handleSubmit(async (data)=>{
                try {
                    await axios.post('/api/issues',data);
                    router.push('/issues');
                } catch (error) {
                    setError('An unexpected error occured.');
                }

              })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')}/>
            </TextField.Root>
            <Controller
                name="description"
                control= {control}
                render= {({field})=><SimpleMDE placeholder='Description' {...field}/>}
            />
            <Button>Submit new issue</Button>
        </form>
    </div>
  )
}

export default NewIssuePage