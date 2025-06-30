'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inputList } from "@/lists/footer-lists";
import { KeyboardEvent, useState } from "react";

export default function FooterForm() {
    const [inputForm, setInputForm] = useState<{ type: string, value: string }[]>([
        {
            type: 'text',
            value: '',
        },
        {
            type: 'tel',
            value: '',
        },
        {
            type: 'email',
            value: '',
        },
        {
            type: 'textarea',
            value: '',
        },
    ]);

    const onInputForm = (index: number, value: string, type: string): void => {
        if (index === 3 && value.length > 200 && type === 'textarea') return;
        setInputForm((prev) => {
            const newPrev = [...prev];
            newPrev[index].value = value;
            return newPrev;
        })
    };

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

    return (
        <form className="max-laptop:hidden">
            <span className="font-bold text-xl">پیام به ترخینه </span>
            <div className="mt-4 h-36 flex items-center gap-6">
                <div className="flex flex-col gap-3">
                    {
                        inputList.map(({ type, placeholder, dir }, index) => (
                            <Input
                                key={index + 1}
                                type={type}
                                dir={dir}
                                placeholder={placeholder}
                                className="placeholder:text-right placeholder:text-white h-10"
                                value={inputForm[index].value}
                                onChange={(e) => onInputForm(index, e.target.value, type)}
                                onKeyDown={e => onKeyDown(e, type)}
                            />
                        ))
                    }
                </div>
                <div className="h-full">
                    <Textarea
                        placeholder="پیام شما"
                        className="w-72 h-36 placeholder:text-white resize-none"
                        value={inputForm[3].value}
                        onChange={(e) => onInputForm(3, e.target.value, 'textarea')}
                    />
                    <p dir="ltr" className="text-xs mt-1 mb-2">{inputForm[3].value.length} / 200</p>
                    <Button
                        variant='transparent'
                        className="float-left w-48 h-10"
                        onClick={(e) => e.preventDefault()}>
                        ارسال پیام
                    </Button>
                </div>
            </div>
        </form>
    )
}