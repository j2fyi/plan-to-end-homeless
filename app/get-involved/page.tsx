import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Users,
  Heart,
  Briefcase,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      title: "Service Providers",
      description: "Join our coordinated response system and enhance service delivery",
      icon: Briefcase,
      color: "blue",
      actions: [
        "Participate in case conferencing",
        "Access coordinated intake system",
        "Share data and outcomes",
        "Collaborate on service planning",
      ],
      cta: "Join Provider Network",
    },
    {
      title: "Community Members",
      description: "Support your neighbors and advocate for systemic change",
      icon: Users,
      color: "green",
      actions: [
        "Volunteer with partner organizations",
        "Attend community meetings",
        "Share your story or experience",
        "Advocate for policy changes",
      ],
      cta: "Get Connected",
    },
    {
      title: "Donors & Funders",
      description: "Invest in evidence-based solutions that create lasting change",
      icon: Heart,
      color: "purple",
      actions: [
        "Fund housing development",
        "Support service programs",
        "Sponsor research initiatives",
        "Enable capacity building",
      ],
      cta: "Explore Funding",
    },
    {
      title: "Researchers & Students",
      description: "Contribute to evidence-based practice and policy development",
      icon: MessageSquare,
      color: "orange",
      actions: [
        "Conduct evaluation research",
        "Analyze program outcomes",
        "Support data collection",
        "Develop best practices",
      ],
      cta: "Research Partnerships",
    },
  ]

  const upcomingEvents = [
    {
      title: "Quarterly Stakeholder Meeting",
      date: "January 25, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Region of Waterloo Headquarters",
      type: "In-Person & Virtual",
    },
    {
      title: "Lived Expertise Advisory Panel",
      date: "February 8, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Centre",
      type: "In-Person",
    },
    {
      title: "Service Provider Training Workshop",
      date: "February 15, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Training Facility",
      type: "In-Person",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Community Action</Badge>
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join our community effort to end chronic homelessness. Whether you're a service provider, community member,
            funder, or researcher, there's a meaningful way for you to contribute.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Make a Difference</h2>
            <p className="text-lg text-gray-600">
              Choose the path that aligns with your skills, interests, and capacity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {involvementOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          option.color === "blue"
                            ? "bg-blue-100"
                            : option.color === "green"
                              ? "bg-green-100"
                              : option.color === "purple"
                                ? "bg-purple-100"
                                : "bg-orange-100"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            option.color === "blue"
                              ? "text-blue-600"
                              : option.color === "green"
                                ? "text-green-600"
                                : option.color === "purple"
                                  ? "text-purple-600"
                                  : "text-orange-600"
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{option.title}</CardTitle>
                        <CardDescription className="text-base">{option.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {option.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{action}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full ${
                        option.color === "blue"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : option.color === "green"
                            ? "bg-green-600 hover:bg-green-700"
                            : option.color === "purple"
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-orange-600 hover:bg-orange-700"
                      }`}
                    >
                      {option.cta} <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to get involved? Have questions about how you can contribute? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:EndChronicHomelessness@regionofwaterloo.ca"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      EndChronicHomelessness@regionofwaterloo.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">(519) 575-4400, extension 5008</p>
                    <p className="text-sm text-gray-600">TTY: 519-575-4608</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Waterloo Region, Ontario</p>
                    <p className="text-sm text-gray-600">Interpreters available in over 150 languages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Tell us about your interest in getting involved or ask any questions you have.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" placeholder="Your organization or affiliation" />
                  </div>

                  <div>
                    <Label htmlFor="interest">How would you like to get involved?</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select an option</option>
                      <option value="service-provider">Service Provider</option>
                      <option value="community-member">Community Member</option>
                      <option value="donor-funder">Donor/Funder</option>
                      <option value="researcher">Researcher/Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your interest or ask any questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us at upcoming meetings, workshops, and community events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {event.time}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Portal */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Use our Q&A portal to ask questions directly to the project team. We respond within three business days.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
            Ask a Question
          </Button>
        </div>
      </section>
    </div>
  )
}
