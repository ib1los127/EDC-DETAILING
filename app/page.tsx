"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Droplets, Sparkles, Star, Car, Phone, Mail, MapPin } from "lucide-react"

export default function ECDDetailingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated water bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-100/50 to-transparent">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgba(6, 182, 212, 0.2)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src="/ecd-logo.png"
                alt="ECD Detailing Logo"
                width={400}
                height={300}
                className="drop-shadow-2xl"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-black font-bold drop-shadow-md">
            {"Mobile Car Detailing That Comes to YOU! 🚗✨"}
          </p>
        </header>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-3xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 backdrop-blur-md border-2 border-black shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-black text-white mb-2">ECD DETAILING</h1>
                  <h2 className="text-2xl font-bold text-white">We Bring the Wash to You!</h2>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                {
                  "Skip the car wash lines! Our mobile detailing service comes straight to your driveway. Professional-grade equipment, eco-friendly products, and that fresh car smell - all without you leaving home! 🏠"
                }
              </p>
              <div className="flex flex-wrap gap-3">
                {["Exterior Wash", "Interior Detail", "Wax & Polish", "Engine Bay"].map((service) => (
                  <span key={service} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold">
                    {service}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-black shadow-xl overflow-hidden">
              <Image
                src="/detailing-1.jpg"
                alt="Professional car detailing"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </Card>
            <Card className="rounded-3xl bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-black shadow-xl overflow-hidden">
              <Image
                src="/detailing-2.jpg"
                alt="Interior car cleaning"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </Card>
            <Card className="rounded-3xl bg-gradient-to-br from-green-400 to-blue-500 border-2 border-black shadow-xl overflow-hidden col-span-2">
              <Image
                src="/detailing-3.jpg"
                alt="Mobile car washing"
                width={600}
                height={200}
                className="w-full h-32 object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Meet Alex Section */}
        <Card className="rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 border-2 border-black shadow-2xl mb-16">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-300" />
                  Meet Alex Rodriguez
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {
                    "Hey there! I'm Alex, your friendly neighborhood car detailing expert. With years of experience and a passion for making cars sparkle, I treat every vehicle like it's my own. From daily drivers to weekend warriors, I've got the skills and the smile to make your ride shine! 😄"
                  }
                </p>
                <div className="flex items-center gap-4 text-white/80">
                  <Car className="w-6 h-6" />
                  <span className="font-semibold">Professional • Reliable • Fun</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                    <Image
                      src="/alex-photo.jpg"
                      alt="Alex Rodriguez - ECD Detailing Owner"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white animate-spin" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black text-center mb-8 drop-shadow-lg">
            {"Our Splash-tastic Services 💦"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Basic Wash",
                price: "$25",
                features: ["Exterior wash", "Tire shine", "Windows"],
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                title: "Full Detail",
                price: "$75",
                features: ["Interior + Exterior", "Vacuum", "Wax"],
                gradient: "from-pink-400 to-orange-400",
              },
              {
                title: "Premium Shine",
                price: "$120",
                features: ["Everything included", "Engine bay", "Protection"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Monthly Plan",
                price: "$200",
                features: ["4 washes/month", "Priority booking", "Discounts"],
                gradient: "from-green-400 to-blue-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`rounded-3xl bg-gradient-to-br ${service.gradient} border-2 border-black shadow-xl hover:scale-105 transition-transform`}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-3xl font-black text-yellow-300 mb-4">{service.price}</p>
                  <ul className="text-white/90 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <Droplets className="w-4 h-4 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 border-2 border-black shadow-2xl">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">{"Ready to Get Sudsy? 🧽"}</h2>
                <p className="text-white/90 text-lg mb-8">
                  {
                    'Book your mobile detailing service today! Fill out the form and we\'ll get back to you faster than you can say "squeaky clean"!'
                  }
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <Phone className="w-6 h-6 text-green-300" />
                    <span className="text-lg font-semibold">(555) 123-WASH</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Mail className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg">alex@ecddetailing.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <MapPin className="w-6 h-6 text-pink-300" />
                    <span className="text-lg">Serving Your Area & Beyond!</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl bg-white/20 border border-white/30 text-white h-12 px-4"
                  required
                >
                  <option value="" className="text-gray-800">
                    Select a Service
                  </option>
                  <option value="basic" className="text-gray-800">
                    Basic Wash - $25
                  </option>
                  <option value="full" className="text-gray-800">
                    Full Detail - $75
                  </option>
                  <option value="premium" className="text-gray-800">
                    Premium Shine - $120
                  </option>
                  <option value="monthly" className="text-gray-800">
                    Monthly Plan - $200
                  </option>
                </select>
                <Textarea
                  name="message"
                  placeholder="Tell us about your car and when you'd like service!"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-2xl bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-24"
                />
                <Button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold text-lg h-12 shadow-xl"
                >
                  {"Book My Wash! 🚗💨"}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-16 text-black/70">
          <p className="text-lg">{"© 2024 ECD Detailing • Making Cars Sparkle Since Day One! ✨"}</p>
          <p className="text-sm mt-2">{'Follow us for before & after pics that\'ll make you say "WOW!" 📸'}</p>
        </footer>
      </div>
    </div>
  )
}
