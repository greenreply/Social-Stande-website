"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Upload, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIAL_PLATFORMS = [
    { id: "instagram", label: "Instagram", placeholder: "https://instagram.com/..." },
    { id: "facebook", label: "Facebook", placeholder: "https://facebook.com/..." },
    { id: "google", label: "Google Reviews", placeholder: "https://g.page/..." },
    { id: "whatsapp", label: "WhatsApp", placeholder: "https://wa.me/..." },
    { id: "youtube", label: "YouTube", placeholder: "https://youtube.com/..." },
    { id: "gpay", label: "Google Pay", placeholder: "UPI ID or Payment Link" },
];

export function OrderForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [businessName, setBusinessName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [logo, setLogo] = useState<File | null>(null);
    const [selectedPlatforms, setSelectedPlatforms] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<string[]>([]);

    const handlePlatformToggle = (id: string, checked: boolean) => {
        if (checked) {
            if (Object.keys(selectedPlatforms).length >= 6) return; // Max 6 constraint
            setSelectedPlatforms((prev) => ({ ...prev, [id]: "" }));
        } else {
            const newPlatforms = { ...selectedPlatforms };
            delete newPlatforms[id];
            setSelectedPlatforms(newPlatforms);
        }
    };

    const handleLinkChange = (id: string, value: string) => {
        setSelectedPlatforms((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors([]);
        const newErrors = [];

        if (!businessName.trim()) newErrors.push("Business Name is required");
        if (!contactNumber.trim()) newErrors.push("Contact Number is required");
        if (Object.keys(selectedPlatforms).length < 2) {
            newErrors.push("Please select at least 2 social media platforms");
        }

        // Check if selected platforms have empty links
        const emptyLinks = Object.entries(selectedPlatforms).some(([_, link]) => !link.trim());
        if (emptyLinks) {
            newErrors.push("Please provide links for all selected platforms");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In a real app, we would upload the logo and send data to backend here.
        console.log({
            businessName,
            contactNumber,
            logo: logo?.name,
            links: selectedPlatforms
        });

        router.push("/success");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">

            {/* Business Details */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#253A4E]">1. Business Details</h3>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#253A4E] focus:border-transparent outline-none transition-all"
                        placeholder="e.g. The Coffee House"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Logo</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors text-gray-600">
                            <Upload className="h-4 w-4" />
                            <span>{logo ? logo.name : "Choose File"}</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => e.target.files && setLogo(e.target.files[0])}
                            />
                        </label>
                        {logo && <span className="text-sm text-green-600 flex items-center gap-1"><Check className="h-3 w-3" /> Uploaded</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <input
                        type="tel"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#253A4E] focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                    />
                </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-[#253A4E]">2. Select Platforms</h3>
                    <span className="text-sm text-gray-500">Min 2, Max 6</span>
                </div>

                <div className="grid gap-4">
                    {SOCIAL_PLATFORMS.map((platform) => {
                        const isSelected = Object.prototype.hasOwnProperty.call(selectedPlatforms, platform.id);
                        return (
                            <div key={platform.id} className={cn(
                                "p-4 rounded-lg border transition-all duration-200",
                                isSelected ? "border-[#253A4E] bg-blue-50/30" : "border-gray-200 hover:border-gray-300"
                            )}>
                                <div className="flex items-center gap-3 mb-2">
                                    <input
                                        type="checkbox"
                                        id={platform.id}
                                        checked={isSelected}
                                        onChange={(e) => handlePlatformToggle(platform.id, e.target.checked)}
                                        className="w-4 h-4 text-[#253A4E] rounded focus:ring-[#253A4E]"
                                        disabled={!isSelected && Object.keys(selectedPlatforms).length >= 6}
                                    />
                                    <label htmlFor={platform.id} className="font-medium text-gray-700 cursor-pointer flex-1">
                                        {platform.label}
                                    </label>
                                </div>

                                {isSelected && (
                                    <div className="pl-7 animate-in slide-in-from-top-2 fade-in duration-200">
                                        <input
                                            type="text"
                                            value={selectedPlatforms[platform.id]}
                                            onChange={(e) => handleLinkChange(platform.id, e.target.value)}
                                            placeholder={platform.placeholder}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#253A4E] outline-none"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Errors */}
            {errors.length > 0 && (
                <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm space-y-1">
                    {errors.map((err, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" /> {err}
                        </div>
                    ))}
                </div>
            )}

            {/* Submit */}
            <Button
                type="submit"
                className="w-full bg-[#253A4E] hover:bg-[#1a2937] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                disabled={loading}
            >
                {loading ? "Processing..." : "Place Order - ₹1199"}
            </Button>
        </form>
    );
}
