'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inputList } from "@/lists/footer-lists";
import { KeyboardEvent, useEffect } from "react";
import { SubmitErrorHandler, useForm } from 'react-hook-form'
import { toast } from "sonner";

export default function FooterForm() {
    const { register, watch, setValue, handleSubmit } = useForm<footer_form_inputs>({
        defaultValues: {
            username: '',
            phone: '',
            email: '',
            message: '',
        }
    })

    const onKeyDown = (e: KeyboardEvent, type: string): void => {
        if (type === 'tel') {
            const allowed = ['+', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'ControlLeft', 'ControlRight', 'a'];
            if (
                !allowed.includes(e.key) &&
                (e.key < '0' || e.key > '9')
            ) {
                e.preventDefault();
            }
        }
    }

    const onSubmit = (data: footer_form_inputs) => {
        console.log('submited', data)
        toast.success('پیام شما با موفقیت ارسال شد')
    }
    const onError: SubmitErrorHandler<footer_form_inputs> = (errors) => {
        if (errors.username) {
            toast.error(errors.username.message);
        }
        if (errors.phone) {
            toast.error(errors.phone.message);
        }
        if (errors.email) {
            toast.error(errors.email.message);
        }
        if (errors.message) {
            toast.error(errors.message.message);
        }
    };

    return (
        <form className="max-laptop:hidden" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <span className="font-bold text-xl">پیام به ترخینه </span>
            <div className="mt-4 h-36 flex items-center gap-6">
                <div className="flex flex-col gap-3">
                    {
                        inputList.map(({ id, type, placeholder, dir, errorMessage }, index) => (
                            <Input
                                key={index + 1}
                                type={type}
                                dir={dir}
                                placeholder={placeholder}
                                className="placeholder:text-right placeholder:text-white h-10"
                                onKeyDown={e => onKeyDown(e, type)}
                                {...register(id, {
                                    maxLength: 30,
                                    pattern: id === 'email' ? {
                                        value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                        message: ''
                                    } : undefined,
                                    required: id !== 'email' ?
                                        {
                                            value: true,
                                            message: `${errorMessage}`
                                        } : false,
                                    onChange: (e) => {
                                        const value = e.target.value;
                                        if (value.length > 30) {
                                            setValue(id, value.substring(0, 30))
                                        }
                                    }
                                })}
                            />
                        ))
                    }
                </div>
                <div className="h-full">
                    <Textarea
                        placeholder="پیام شما"
                        className="w-72 h-36 placeholder:text-white resize-none"
                        {...register('message', {
                            maxLength: 200,
                            required: {
                                value: true,
                                message: 'لطفا متن خود را پر کنید'
                            },
                            onChange: (e) => {
                                const value = e.target.value;
                                if (value.length > 200) {
                                    setValue('message', value.substring(0, 200));
                                }
                            }
                        })}
                    />
                    <p dir="ltr" className="text-xs mt-1 mb-2">{watch('message').length} / 200</p>
                    <Button
                        type="submit"
                        variant='transparent'
                        className="float-left w-48 h-10">
                        ارسال پیام
                    </Button>
                </div>
            </div>
        </form>
    )
}