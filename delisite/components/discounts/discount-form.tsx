"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    CheckIcon,
    MailIcon,
    PhoneIcon,
} from "lucide-react"
import { 
    InputGroup,
    InputGroupAddon,
    InputGroupInput
} from "@/components/ui/input-group";


type SignupFormProps = {
    onSuccess: (data: { firstName: string; lastName: string; phone: string; email: string; }) => void;
}


export default function DiscountForm({ onSuccess }: SignupFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email) return;

    const visitorId = localStorage.getItem("visitor_id");

    await fetch("/api/claim-discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            visitorId,
            firstName,
            lastName,
            phone,
            email,
        }),
    });
    
    onSuccess({ firstName, lastName, phone, email });
}


    return (
        <form onSubmit={handleSubmit} className = "space-y-4 mt-4">
            <InputGroup>
                <InputGroupInput 
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </InputGroup>
            <InputGroup>
                <InputGroupInput 
                    placeholder="Last name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </InputGroup>
            <InputGroup>
                <InputGroupInput
                    placeholder="Phone number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </InputGroup>
            <InputGroup>
                <InputGroupInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <Button type="submit" className="w-full">Get Discount</Button>
        </form>
    );
}