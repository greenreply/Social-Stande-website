import { OrderForm } from "@/components/OrderForm";
import { Check, ShieldCheck, Truck } from "lucide-react";

export default function OrderPage() {
    return (
        <div className="bg-[#f8fafc] min-h-screen py-12 md:py-24 relative overflow-hidden">
            {/* Background blobs */}
            {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#253A4E] mb-6 tracking-tight">Complete Your Order</h1>
                    <div className="bg-white/80 backdrop-blur-md inline-flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/50 shadow-sm">
                        <div className="flex flex-col text-left">
                            <span className="text-sm text-gray-500 font-medium">Product</span>
                            <span className="font-bold text-[#253A4E]">Social Standee Premium</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-200"></div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm text-gray-500 font-medium">Price</span>
                            <span className="font-bold text-[#253A4E]">₹1199</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-200"></div>
                        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                            <Truck className="h-4 w-4" /> <span className="text-sm font-semibold">Free Shipping</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 p-1 md:p-2">
                        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-inner">
                            <OrderForm />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2 text-sm">
                            <ShieldCheck className="h-4 w-4" /> Secure Payment
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4" /> 2mm Premium Acrylic
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    );
}
