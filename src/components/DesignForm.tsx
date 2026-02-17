// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//     Instagram,
//     Facebook,
//     Linkedin,
//     Youtube,
//     MapPin,
//     MessageCircle,
//     CreditCard,
//     Upload,
//     FileText,
//     Image as ImageIcon,
//     Download,
//     Loader2
// } from "lucide-react";
// import jsPDF from "jspdf";
// import QRCode from "qrcode";

// // Social Media Options
// const SOCIAL_OPTIONS = [
//     { id: 'google', label: 'Google Review', icon: MapPin },
//     { id: 'instagram', label: 'Instagram', icon: Instagram },
//     { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
//     { id: 'facebook', label: 'Facebook', icon: Facebook },
//     { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
//     { id: 'youtube', label: 'YouTube', icon: Youtube },
//     { id: 'payment', label: 'Payment / UPI', icon: CreditCard },
// ];

// export function DesignForm() {
//     const [step, setStep] = useState(1);
//     const [isGenerating, setIsGenerating] = useState(false);

//     // Form State
//     const [businessName, setBusinessName] = useState("");
//     const [logoFile, setLogoFile] = useState<File | null>(null);
//     const [logoPreview, setLogoPreview] = useState<string | null>(null);

//     const [designDescription, setDesignDescription] = useState("");
//     const [designImage, setDesignImage] = useState<File | null>(null);
//     const [designImagePreview, setDesignImagePreview] = useState<string | null>(null);
//     const [designType, setDesignType] = useState<'text' | 'image' | 'both'>('text');

//     const [selectedSocials, setSelectedSocials] = useState<string[]>([]);
//     const [socialLinks, setSocialLinks] = useState<Record<string, string>>({});

//     // Handlers
//     const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files?.[0]) {
//             const file = e.target.files[0];
//             setLogoFile(file);
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setLogoPreview(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleDesignImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files?.[0]) {
//             const file = e.target.files[0];
//             setDesignImage(file);
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setDesignImagePreview(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleSocialToggle = (id: string) => {
//         setSelectedSocials(prev =>
//             prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
//         );
//     };

//     const handleLinkChange = (id: string, value: string) => {
//         setSocialLinks(prev => ({ ...prev, [id]: value }));
//     };

//     // PDF Generation
//     const generatePDF = async () => {
//         setIsGenerating(true);
//         try {
//             const doc = new jsPDF({
//                 orientation: "portrait",
//                 unit: "mm",
//                 format: "a4",
//             });

//             // Background - Light Yellow tint
//             doc.setFillColor(255, 253, 231); // light yellow
//             doc.rect(0, 0, 210, 297, "F");

//             // Header Bar - Brand Yellow
//             doc.setFillColor(244, 208, 63); // #F4D03F
//             doc.rect(0, 0, 210, 40, "F");

//             doc.setTextColor(17, 17, 17); // Black
//             doc.setFontSize(24);
//             doc.setFont("helvetica", "bold");
//             doc.text("Social Standee Design Request", 105, 25, { align: "center" });

//             // Business Info
//             let yPos = 60;
//             doc.setFontSize(16);
//             doc.text("Business Details", 20, yPos);
//             yPos += 10;
//             doc.setLineWidth(0.5);
//             doc.line(20, yPos, 190, yPos);
//             yPos += 15;

//             // Logo
//             if (logoPreview) {
//                 doc.text("Logo:", 20, yPos);
//                 // Add logo image
//                 doc.addImage(logoPreview, "JPEG", 50, yPos - 5, 30, 30);
//                 yPos += 35;
//             }

//             doc.setFontSize(12);
//             doc.setFont("helvetica", "bold");
//             doc.text(`Business Name: ${businessName}`, 20, yPos);
//             yPos += 15;

//             // Design Instructions
//             if (designDescription || designImagePreview) {
//                 yPos += 10;
//                 doc.setFontSize(16);
//                 doc.text("Design Preferences", 20, yPos);
//                 yPos += 10;
//                 doc.line(20, yPos, 190, yPos);
//                 yPos += 15;

//                 doc.setFontSize(12);
//                 if (designDescription) {
//                     doc.text(`Instructions: ${designDescription}`, 20, yPos, { maxWidth: 170 });
//                     // Approximate height of text
//                     const lines = doc.splitTextToSize(designDescription, 170);
//                     yPos += (lines.length * 7) + 10;
//                 }

//                 if (designImagePreview) {
//                     doc.text("Reference Image:", 20, yPos);
//                     doc.addImage(designImagePreview, "JPEG", 20, yPos + 5, 80, 60);
//                     yPos += 75;
//                 }
//             }

//             // Social Media / QR Codes
//             if (yPos > 240) {
//                 doc.addPage();
//                 yPos = 30;
//                 // Background for new page
//                 doc.setFillColor(255, 253, 231);
//                 doc.rect(0, 0, 210, 297, "F");
//             } else {
//                 yPos += 20;
//             }

//             doc.setFontSize(16);
//             doc.text("Social Media Config", 20, yPos);
//             yPos += 10;
//             doc.line(20, yPos, 190, yPos);
//             yPos += 20;

//             // Grid for QR codes
//             const startX = 20;
//             const colWidth = 85;
//             const rowHeight = 70;
//             let col = 0;

//             for (const socialId of selectedSocials) {
//                 const option = SOCIAL_OPTIONS.find(o => o.id === socialId);
//                 const link = socialLinks[socialId];

//                 if (option && link) {
//                     // Check page overflow
//                     if (yPos + rowHeight > 280) {
//                         doc.addPage();
//                         yPos = 30;
//                         doc.setFillColor(255, 253, 231);
//                         doc.rect(0, 0, 210, 297, "F");
//                         col = 0;
//                     }

//                     const x = startX + (col * colWidth);

//                     // Generate QR
//                     try {
//                         const qrDataUrl = await QRCode.toDataURL(link, { width: 200, margin: 1 });

//                         // Draw Box
//                         doc.setFillColor(255, 255, 255);
//                         doc.setDrawColor(200, 200, 200);
//                         doc.roundedRect(x, yPos, 80, 60, 3, 3, "FD");

//                         // Add Info
//                         doc.setFontSize(12);
//                         doc.text(option.label, x + 40, yPos + 10, { align: "center" });

//                         // Add QR
//                         doc.addImage(qrDataUrl, "PNG", x + 25, yPos + 15, 30, 30);

//                         // Add Link (truncated)
//                         doc.setFontSize(8);
//                         const displayLink = link.length > 35 ? link.substring(0, 32) + "..." : link;
//                         doc.text(displayLink, x + 40, yPos + 55, { align: "center" });

//                     } catch (err) {
//                         console.error("QR Gen Error", err);
//                     }

//                     col++;
//                     if (col > 1) {
//                         col = 0;
//                         yPos += rowHeight;
//                     }
//                 }
//             }

//             doc.save(`SocialStandee_Design_${businessName.replace(/\s+/g, '_')}.pdf`);

//         } catch (error) {
//             console.error("PDF Generation failed:", error);
//             alert("Failed to generate PDF. Please try again.");
//         } finally {
//             setIsGenerating(false);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
//             <div className="mb-8 text-center">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">Design Your Standee</h1>
//                 <p className="text-gray-500">
//                     Step {step} of 3: {step === 1 ? "Business Info" : step === 2 ? "Design Preferences" : "Social Links"}
//                 </p>
//                 <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
//                     <div
//                         className="bg-brand h-full transition-all duration-300 ease-in-out"
//                         style={{ width: `${(step / 3) * 100}%` }}
//                     />
//                 </div>
//             </div>

//             <div className="space-y-8 min-h-[400px]">
//                 {/* Step 1: Business Details */}
//                 {step === 1 && (
//                     <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
//                         <div className="space-y-2">
//                             <Label htmlFor="businessName" className="text-lg">Business Name</Label>
//                             <Input
//                                 id="businessName"
//                                 placeholder="Enter your business name"
//                                 value={businessName}
//                                 onChange={(e) => setBusinessName(e.target.value)}
//                                 className="text-lg py-6"
//                             />
//                         </div>

//                         <div className="space-y-2">
//                             <Label htmlFor="logo" className="text-lg">Upload Logo</Label>
//                             <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50/50 transition-colors cursor-pointer relative">
//                                 <input
//                                     type="file"
//                                     id="logo"
//                                     accept="image/*"
//                                     onChange={handleLogoUpload}
//                                     className="absolute inset-0 opacity-0 cursor-pointer"
//                                 />
//                                 {logoPreview ? (
//                                     <div className="flex flex-col items-center">
//                                         <img src={logoPreview} alt="Logo Preview" className="h-32 object-contain mb-4" />
//                                         <p className="text-sm text-green-600 font-medium">Logo uploaded successfully</p>
//                                         <p className="text-xs text-gray-400 mt-1">Click to change</p>
//                                     </div>
//                                 ) : (
//                                     <div className="flex flex-col items-center text-gray-400">
//                                         <Upload className="w-12 h-12 mb-4" />
//                                         <p className="font-medium">Click to upload or drag and drop</p>
//                                         <p className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Step 2: Design Preferences */}
//                 {step === 2 && (
//                     <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
//                         <div className="flex gap-4 mb-6">
//                             <div
//                                 onClick={() => setDesignType('text')}
//                                 className={`flex-1 p-4 border rounded-xl cursor-pointer transition-all ${designType === 'text' ? 'border-brand bg-brand/5 ring-2 ring-brand' : 'border-gray-200 hover:border-brand/50'}`}
//                             >
//                                 <div className="flex items-center gap-3 mb-2">
//                                     <FileText className={designType === 'text' ? 'text-brand-dark' : 'text-gray-400'} />
//                                     <span className="font-semibold">Text Description</span>
//                                 </div>
//                                 <p className="text-sm text-gray-500">Describe how you want your standee to look.</p>
//                             </div>

//                             <div
//                                 onClick={() => setDesignType('image')}
//                                 className={`flex-1 p-4 border rounded-xl cursor-pointer transition-all ${designType === 'image' ? 'border-brand bg-brand/5 ring-2 ring-brand' : 'border-gray-200 hover:border-brand/50'}`}
//                             >
//                                 <div className="flex items-center gap-3 mb-2">
//                                     <ImageIcon className={designType === 'image' ? 'text-brand-dark' : 'text-gray-400'} />
//                                     <span className="font-semibold">Upload Key Design</span>
//                                 </div>
//                                 <p className="text-sm text-gray-500">Provide an image or sketch for reference.</p>
//                             </div>
//                         </div>

//                         <div className="space-y-4">
//                             <Label className="text-lg">Design Details (Optional)</Label>

//                             {(designType === 'text' || designType === 'both') && (
//                                 <Textarea
//                                     placeholder="e.g. Keep it clean and minimal, use my brand colors, make the QR code large..."
//                                     value={designDescription}
//                                     onChange={(e) => setDesignDescription(e.target.value)}
//                                     className="min-h-[150px] text-base"
//                                 />
//                             )}

//                             {(designImage || designType === 'image') && (
//                                 <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50/50 transition-colors relative">
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={handleDesignImageUpload}
//                                         className="absolute inset-0 opacity-0 cursor-pointer"
//                                     />
//                                     {designImagePreview ? (
//                                         <div className="flex items-center justify-center gap-4">
//                                             <img src={designImagePreview} alt="Design Preview" className="h-20 w-20 object-cover rounded-md" />
//                                             <div className="text-left">
//                                                 <p className="text-sm font-medium text-gray-900">{designImage?.name}</p>
//                                                 <p className="text-xs text-gray-500">Click to replace</p>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="flex items-center justify-center gap-2 text-gray-500">
//                                             <Upload className="w-5 h-5" />
//                                             <span>Upload Reference Image</span>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}

//                 {/* Step 3: Social Media Selection */}
//                 {step === 3 && (
//                     <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
//                         <div className="space-y-2">
//                             <Label className="text-lg mb-4 block">Select Platforms to Include</Label>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {SOCIAL_OPTIONS.map((option) => (
//                                     <div
//                                         key={option.id}
//                                         className={`p-4 border rounded-xl flex items-start gap-4 transition-all ${selectedSocials.includes(option.id) ? 'border-brand bg-brand/5' : 'border-gray-200'}`}
//                                     >
//                                         <Checkbox
//                                             id={option.id}
//                                             checked={selectedSocials.includes(option.id)}
//                                             onCheckedChange={() => handleSocialToggle(option.id)}
//                                         />
//                                         <div className="flex-1 space-y-2">
//                                             <div className="flex items-center gap-2">
//                                                 <option.icon className="w-4 h-4 text-gray-600" />
//                                                 <Label htmlFor={option.id} className="cursor-pointer font-semibold">{option.label}</Label>
//                                             </div>
//                                             {selectedSocials.includes(option.id) && (
//                                                 <Input
//                                                     placeholder={option.id === 'payment' ? "Enter UPI ID or Payment Link" : "Enter Profile Link / URL"}
//                                                     value={socialLinks[option.id] || ''}
//                                                     onChange={(e) => handleLinkChange(option.id, e.target.value)}
//                                                     className="h-8 text-sm mt-2"
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
//                 <Button
//                     variant="ghost"
//                     onClick={() => setStep(Math.max(1, step - 1))}
//                     disabled={step === 1}
//                     className="text-gray-500 hover:text-gray-900"
//                 >
//                     Back
//                 </Button>

//                 {step < 3 ? (
//                     <Button
//                         onClick={() => setStep(step + 1)}
//                         className="bg-brand text-brand-contrast hover:bg-brand-dark px-8"
//                         disabled={step === 1 && !businessName}
//                     >
//                         Next Step
//                     </Button>
//                 ) : (
//                     <Button
//                         onClick={generatePDF}
//                         disabled={isGenerating || selectedSocials.length === 0}
//                         className="bg-brand text-brand-contrast hover:bg-brand-dark px-8 min-w-[200px]"
//                     >
//                         {isGenerating ? (
//                             <>
//                                 <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                                 Generating PDF...
//                             </>
//                         ) : (
//                             <>
//                                 <Download className="w-4 h-4 mr-2" />
//                                 Download PDF Design
//                             </>
//                         )}
//                     </Button>
//                 )}
//             </div>
//         </div>
//     );
// }
