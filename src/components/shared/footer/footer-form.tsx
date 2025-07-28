'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inputList } from "@/lists/footer-lists";
import { footerFormRequest } from "@/services/footer-form-service";
import { KeyboardEvent } from "react";
import { SubmitErrorHandler, useForm } from 'react-hook-form'
import { toast } from "sonner";
import { useMutation } from '@tanstack/react-query'

export default function FooterForm() {
    const { mutateAsync } = useMutation({
        mutationFn: (data: footer_form_inputs) => footerFormRequest.instance.postMessage(data),
        onSuccess: () => reset(),
        onError: (error) => console.error(error)
    })

    const { register, watch, setValue, handleSubmit, reset } = useForm<footer_form_inputs>({
        defaultValues: {
            username: '',
            phone: '',
            email: '',
            message: '',
        },
        shouldFocusError: false,
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
        toast.promise(mutateAsync(data), {
            loading: 'درحال ارسال پیام شما',
            success: 'پیام شما با موفقیت ارسال شد',
            error: 'خطا!'
        })
    }

    const onError: SubmitErrorHandler<footer_form_inputs> = (errors) => {
        if (errors.email) {
            toast.error(errors.email.message);
        }
        if (errors.username && errors.phone?.type === 'required' && errors.message) {
            toast.error('لطفا بخش های خالی را پر کنید');
            return;
        }
        if (errors.message) {
            toast.error(errors.message.message);
        }
        if (errors.phone) {
            toast.error(errors.phone.message);
        }
        if (errors.username) {
            toast.error(errors.username.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <span className="font-bold text-xl">پیام به ترخینه </span>
            <div className="mt-4 h-36 flex max-laptop:flex-col items-center gap-6">
                <div className="flex flex-col gap-3 max-laptop:w-full">
                    {
                        inputList.map(({ id, type, placeholder, dir, errorMessage }, index) => (
                            <Input
                                key={index + 1}
                                type={type}
                                dir={dir}
                                placeholder={placeholder}
                                className="placeholder:text-right placeholder:text-white !w-full h-10"
                                onKeyDown={e => onKeyDown(e, type)}
                                {...register(id, {
                                    maxLength: 30,
                                    pattern: id === 'email' ? {
                                        value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                        message: 'ایمیل وارد شده معتبر نمی باشد'
                                    } :
                                        id === 'phone' ? {
                                            value: /^(\+98|0098|98|0)?9[0-9]{9}$/,
                                            message: 'شماره وارد شده معتبر نمی باشد'
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
                                message: 'لطفا پیام خود را پر کنید'
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