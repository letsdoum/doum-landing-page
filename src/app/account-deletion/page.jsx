"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import {
  Shield,
  Trash2,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  FileText,
  User,
  FileCheck,
  CreditCard,
  Home,
  HelpCircle,
  Settings,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import axios from "axios"

const DataDeletionPage = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    reason: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCheckingStatus, setIsCheckingStatus] = useState(false)
  const [submitResponse, setSubmitResponse] = useState(null)
  const [statusResponse, setStatusResponse] = useState(null)
  const [statusPhoneNumber, setStatusPhoneNumber] = useState("")
  const [activeView, setActiveView] = useState("request")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResponse(null)

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/data-deletion/request-deletion`, {
        phoneNumber: formData.phoneNumber.trim(),
        email: formData.email.trim(),
        reason: formData.reason.trim(),
      })
      setSubmitResponse(res.data)
      setFormData({ phoneNumber: "", email: "", reason: "" })
    } catch (error) {
      console.log(error.response?.data || error.message)
      if(error?.response?.status ===429){
        setSubmitResponse({
          success: false,
          message: "Too many requests. Please try again later.",
        })
        return
      }
      if(error.response && error?.response?.data) {
      setSubmitResponse(error?.response?.data)
      }else {
        setSubmitResponse({
          success: false,
          message: "Network error. Please check your connection and try again.",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const checkStatus = async () => {
    if (!statusPhoneNumber.trim()) return

    setIsCheckingStatus(true)
    setStatusResponse(null)

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/data-deletion/deletion-status/${encodeURIComponent(statusPhoneNumber.trim())}`)
      console.log("Status Response:", res.data)
      setStatusResponse(res.data)
    } catch (error) {
      setStatusResponse({
        success: false,
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsCheckingStatus(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-orange-500" />
      case "processing":
        return <AlertCircle className="h-4 w-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusMessage = (status) => {
    switch (status) {
      case "pending":
        return "Your deletion request is in queue and will be processed soon."
      case "processing":
        return "We are currently processing your data deletion request."
      case "completed":
        return "Your data has been successfully deleted from our systems."
      case "failed":
        return "There was an issue processing your request. Please contact support."
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 w-screen ">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
              <img src="/DOUM-logo-removebg-preview.webp" alt="Doum Logo" className="h-10 " />

              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
            <Trash2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request for Data Deletion</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Permanently remove your personal data from our systems in compliance with privacy regulations. This process
            is secure, transparent, and irreversible.
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveView("request")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeView === "request"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Trash2 className="h-4 w-4 inline mr-2" />
                Request Deletion
              </button>
              <button
                onClick={() => setActiveView("status")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeView === "status"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Search className="h-4 w-4 inline mr-2" />
                Check Status
              </button>
            </div>
          </div>
        </div>

        {activeView === "request" && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="xl:col-span-2">
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">Submit Deletion Request</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Fill out the form below to initiate the permanent deletion of your account data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="phoneNumber" className="text-gray-900 font-medium text-base">
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="pl-11 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                      <p className="text-sm text-gray-500">Enter the phone number associated with your account</p>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-gray-900 font-medium text-base">
                        Email Address (Optional)
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-11 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        We'll send updates about your deletion request to this email
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="reason" className="text-gray-900 font-medium text-base">
                        Reason for Deletion (Optional)
                      </Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Textarea
                          id="reason"
                          name="reason"
                          placeholder="Please tell us why you're deleting your account..."
                          value={formData.reason}
                          onChange={handleInputChange}
                          rows={4}
                          maxLength={500}
                          className="pl-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Help us improve by sharing your feedback</p>
                        <p className="text-sm text-gray-500">{formData.reason.length}/500</p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.phoneNumber.trim()}
                      className="w-full h-12 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium rounded-xl shadow-lg transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing Request...
                        </>
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Submit Deletion Request
                        </>
                      )}
                    </Button>
                  </form>

                  {submitResponse && (
                    <Alert
                      className={`mt-6 rounded-xl border-0 ${
                        submitResponse.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      }`}
                    >
                      <AlertDescription className="text-base">{submitResponse.message}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              {/* Verification Call Notice */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Verification Call</h3>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        You may receive a call from our team to confirm your identity and deletion request for security
                        purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What Gets Deleted */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900">What Gets Deleted?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Personal Information</h4>
                      <p className="text-sm text-gray-600">Phone, email, profile data</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FileCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">KYC Documents</h4>
                      <p className="text-sm text-gray-600">ID verification, documents</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Account Data</h4>
                      <p className="text-sm text-gray-600">Transaction history, preferences</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900">Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-900">Processing Time</p>
                      <p className="text-xs text-orange-700">Up to 30 business days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-900">Irreversible Action</p>
                      <p className="text-xs text-red-700">Cannot be undone once completed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Legal Compliance</p>
                      <p className="text-xs text-blue-700">Some data retained per regulations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeView === "status" && (
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Check Deletion Status</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Enter your phone number to check the current status of your deletion request
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-gray-900 font-medium text-base">Phone Number</Label>
                  <div className="flex space-x-3">
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={statusPhoneNumber}
                        onChange={(e) => setStatusPhoneNumber(e.target.value)}
                        className="pl-11 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    <Button
                      onClick={checkStatus}
                      disabled={isCheckingStatus || !statusPhoneNumber.trim()}
                      className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl"
                    >
                      {isCheckingStatus ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          Check
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {statusResponse && (
                  <div className="mt-6">
                    {statusResponse.success && statusResponse.data ? (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <div className="flex items-center space-x-3 mb-4">
                          {getStatusIcon(statusResponse.data.status)}
                          <div>
                            <Badge variant="secondary" className="capitalize font-medium">
                              {statusResponse.data.status}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {getStatusMessage(statusResponse.data.status)}
                        </p>

                        <div className="bg-white rounded-lg p-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Request Date:</span>
                            <span className="font-medium text-gray-900">
                              {new Date(statusResponse.data.requestedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Expected Completion:</span>
                            <span className="font-medium text-gray-900">
                              {new Date(
                                new Date(statusResponse.data.requestedAt).getTime() + 30 * 24 * 60 * 60 * 1000,
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Alert className="rounded-xl border-0 bg-red-50 text-red-800">
                        <AlertDescription className="text-base">{statusResponse.message}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

export default DataDeletionPage
