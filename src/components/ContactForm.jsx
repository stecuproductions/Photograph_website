"use client";
import { useState } from 'react';
import ContactInput from "../UI/ContactInput";
import Button from "../UI/Button";
const ContactForm = () => {
    const inputs = [
        { label: "Temat", name: 'subject', type: 'text', placeholder: 'Wpisz temat wiadomości', required: true },
        { label: 'Imię i Nazwisko', name: 'name', type: 'text', placeholder: 'Wpisz swoje imię i nazwisko (opcjonalne)', required: false },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'Wpisz swój email', required: true },
        { label: 'Telefon', name: 'phone', type: 'tel', placeholder: 'Wpisz swój numer telefonu (opcjonalne)', required: false },
        { label: 'Wiadomość', name: 'message', type: 'textarea', placeholder: 'Wpisz swoją wiadomość', required: true }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <form action="" className='flex flex-col gap-4 items-center'>
            {inputs.map((input, index) => (
                <ContactInput
                    key={index}
                    label={input.label}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={formData[input.name] || ""}
                    onChange={(e) =>
                        setFormData({ ...formData, [input.name]: e.target.value })
                    }
                    className="mb-4"
                />
            ))}
            <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full max-w-[300px] mt-4"
            >
                Wyślij
            </Button>
        </form>

    );
};

export default ContactForm;