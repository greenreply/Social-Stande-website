import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-3xl shadow-lg text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-[#253A4E] mb-4">Order Successful!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your order. We will contact you shortly on your provided number to confirm the design.
                </p>

                <Link href="/">
                    <Button className="w-full bg-[#253A4E] hover:bg-[#1a2937] text-lg py-6">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
