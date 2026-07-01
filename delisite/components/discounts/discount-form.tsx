"use client";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    InputGroup,
    InputGroupInput
} from "@/components/ui/input-group";


type SignupFormProps = {
    onSuccess: (data: { firstName: string; lastName: string; phone: string; email: string; }) => void;
}

type FieldErrors = {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
};


export default function DiscountForm({ onSuccess }: SignupFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

    const uid = useId();
    const ids = {
        firstName: `${uid}-first-name`,
        lastName: `${uid}-last-name`,
        phone: `${uid}-phone`,
        email: `${uid}-email`,
    };

    function validate(): FieldErrors {
        const errors: FieldErrors = {};
        if (!firstName.trim()) errors.firstName = "First name is required.";
        if (!lastName.trim()) errors.lastName = "Last name is required.";
        if (!phone.trim()) errors.phone = "Phone number is required.";
        if (!email.trim()) errors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
        return errors;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (submitting) return;

        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setError("Please fix the highlighted fields.");
            return;
        }

        setFieldErrors({});
        setSubmitting(true);
        setError(null);

        const visitorId = localStorage.getItem("visitor_id");

        try {
            const res = await fetch("/api/claim-discount", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ visitorId, firstName, lastName, phone, email }),
            });

            if (!res.ok) throw new Error("Request failed");

            onSuccess({ firstName, lastName, phone, email });
        } catch {
            setError("Something went wrong. Please try again.");
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4" noValidate>
            <p className="text-xs text-muted-foreground">
                All fields are required.
            </p>

            <div className="space-y-1">
                <label htmlFor={ids.firstName} className="sr-only">
                    First name (required)
                </label>
                <InputGroup>
                    <InputGroupInput
                        id={ids.firstName}
                        type="text"
                        placeholder="First name"
                        autoComplete="given-name"
                        required
                        aria-required="true"
                        aria-invalid={fieldErrors.firstName ? true : undefined}
                        aria-describedby={fieldErrors.firstName ? `${ids.firstName}-error` : undefined}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </InputGroup>
                {fieldErrors.firstName && (
                    <p id={`${ids.firstName}-error`} className="text-sm text-destructive">
                        {fieldErrors.firstName}
                    </p>
                )}
            </div>

            <div className="space-y-1">
                <label htmlFor={ids.lastName} className="sr-only">
                    Last name (required)
                </label>
                <InputGroup>
                    <InputGroupInput
                        id={ids.lastName}
                        type="text"
                        placeholder="Last name"
                        autoComplete="family-name"
                        required
                        aria-required="true"
                        aria-invalid={fieldErrors.lastName ? true : undefined}
                        aria-describedby={fieldErrors.lastName ? `${ids.lastName}-error` : undefined}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </InputGroup>
                {fieldErrors.lastName && (
                    <p id={`${ids.lastName}-error`} className="text-sm text-destructive">
                        {fieldErrors.lastName}
                    </p>
                )}
            </div>

            <div className="space-y-1">
                <label htmlFor={ids.phone} className="sr-only">
                    Phone number (required)
                </label>
                <InputGroup>
                    <InputGroupInput
                        id={ids.phone}
                        type="tel"
                        inputMode="tel"
                        placeholder="Phone number"
                        autoComplete="tel"
                        required
                        aria-required="true"
                        aria-invalid={fieldErrors.phone ? true : undefined}
                        aria-describedby={fieldErrors.phone ? `${ids.phone}-error` : undefined}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </InputGroup>
                {fieldErrors.phone && (
                    <p id={`${ids.phone}-error`} className="text-sm text-destructive">
                        {fieldErrors.phone}
                    </p>
                )}
            </div>

            <div className="space-y-1">
                <label htmlFor={ids.email} className="sr-only">
                    Email (required)
                </label>
                <InputGroup>
                    <InputGroupInput
                        id={ids.email}
                        type="email"
                        inputMode="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-invalid={fieldErrors.email ? true : undefined}
                        aria-describedby={fieldErrors.email ? `${ids.email}-error` : undefined}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                {fieldErrors.email && (
                    <p id={`${ids.email}-error`} className="text-sm text-destructive">
                        {fieldErrors.email}
                    </p>
                )}
            </div>

            {error && (
                <p role="alert" aria-live="assertive" className="text-sm text-destructive">
                    {error}
                </p>
            )}

            <Button type="submit" className="w-full" disabled={submitting} aria-busy={submitting}>
                {submitting ? "Claiming…" : "Claim my free bagel"}
            </Button>
        </form>
    );
}
