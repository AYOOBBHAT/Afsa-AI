"use client";

import * as z from "zod";
import {MessageSquare} from "lucide-react";

import {Heading} from "@/components/heading";
import { useForm } from "react-hook-form"
import { formSchema } from "./constants";
import {zodResolver} from "@hookform/resolvers/zod"
const ConversationPage=()=>{

    const form =useForm <z.infer<typeof formSchema>>({
resolver:zodResolver(formSchema),
defaultValues:{
    prompt:""
}

    });

    const isLoading=form.formState.isSubmitting;
    const onSubmit=async(values:z.infer<typeof formSchema>)=>{
        console.log(values);
    }


        



    
    
    

    return <div>
        <Heading title="Conversation" description="most advanced conversation model" icon={MessageSquare} iconColor="text-voilet-500"  bgColor="bg-voilet-500/10" />
        <div className="px-4 lg:px-8">

        </div>
        
        </div>
         
        

    
}

export default ConversationPage;