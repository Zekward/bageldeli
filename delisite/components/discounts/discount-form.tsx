"use client";
import { useState } from "react";

export default function DiscountForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    return (
        <form>
            <input placeholder="First name" />
            <input placeholder="Last name" />
            <input placeholder="Phone number" />
            <input placeholder="Email (optional)" />
            <button type="submit">Get 10% Off</button>
        </form>
    );
}