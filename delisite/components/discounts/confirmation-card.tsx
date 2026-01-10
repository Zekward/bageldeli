import { GiftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FreeBagelCard() {
  return (

    <div>
    
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <GiftIcon className="h-6 w-6 text-green-600" />
    </div>

    <h1 className="text-2xl font-bold mb-2">
        🎉 Free Bagel Unlocked!
    </h1>

    <p className="text-muted-foreground mb-6">
        Show this screen to the cashier to claim your free bagel.
    </p>

    <div className="rounded-lg border border-dashed p-4 mb-6">
        <p className="text-sm font-medium">
        Valid today only
        </p>
    </div>

    <Button className="w-full" disabled>
        Ready to Redeem
    </Button>
    </div>
  );
}