"use client";

import { useState } from "react";
import DiscountForm from "@/components/discounts/discount-form";
import FreeBagelCard from "@/components/discounts/confirmation-card";

type Customer = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

export default function DiscountsPage() {
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [claimed, setClaimed] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
            <div className="w-full max-w-md rounded-xl border bg background p-6 shadow-sm">

                {!claimed ? (
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Claim a free bagel w/ cream cheese!!!
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Enter your info and show this screen to the cashier.
                        </p>
                        <DiscountForm onSuccess={() => setClaimed(true)} />
                    </div>
                ) : (
                    <FreeBagelCard />
                )}
            </div>
        </div>
    );
}