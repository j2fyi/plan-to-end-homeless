"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Home, Calendar, Download, Quote } from "lucide-react"

export default function DataTrendsPage() {
  // Mock data for visualization
  const chartData = {
    chronicHomelessness: [
      { month: "Jan 2023", count: 245 },
      { month: "Apr 2023", count: 238 },
      { month: "Jul 2023", count: 225 },
      { month: "Oct 2023", count: 210 },
      { month: "Jan 2024", count: 195 },
      { month: "Apr 2024", count: 178 },
      { month: "Jul 2024", count: 165 },
      { month: "Oct 2024", count: 152 },
    ],
    housingPlacements: [
      { month: "Jan 2024", count: 8 },
      { month: "Feb 2024", count: 12 },
      { month: "Mar 2024", count: 15 },
      { month: "Apr 2024", count: 18 },
      { month: "May 2024", count: 22 },
      { month: "Jun 2024", count: 19 },
      { month: "Jul 2024", count: 25 },
      { month: "Aug 2024", count: 28 },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Data Dashboard</Badge>
              <h1 className="text-4xl font-bold mb-4">Data & Trends</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Track progress through comprehensive data analysis and evidence-based insights into chronic homelessness
                in Waterloo Region.
              </p>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-green-600">152</CardTitle>
                <CardDescription>People Currently Experiencing Chronic Homelessness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>-38% since plan launch</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-blue-600">147</CardTitle>
                <CardDescription>People Successfully Housed in 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-blue-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+65% vs 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-purple-600">89%</CardTitle>
                <CardDescription>Housing Retention Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-purple-600">
                  <Home className="h-4 w-4 mr-1" />
                  <span>12-month follow-up</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-orange-600">156</CardTitle>
                <CardDescription>Average Days to Housing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-orange-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>-45 days vs 2023</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Chronic Homelessness Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingDown className="h-5 w-5 mr-2 text-green-600" />
                  Chronic Homelessness Reduction
                </CardTitle>
                <CardDescription>Number of people experiencing chronic homelessness over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-64 bg-gradient-to-t from-green-50 to-white rounded-lg p-4 relative overflow-hidden">
                    {/* Simple chart visualization */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end justify-between h-32">
                        {chartData.chronicHomelessness.map((point, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="bg-green-500 w-6 rounded-t"
                              style={{ height: `${(300 - point.count) / 2}px` }}
                            ></div>
                            <span className="text-xs text-gray-600 mt-2 transform -rotate-45 origin-left">
                              {point.month.split(" ")[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-100 text-green-800">38% Reduction</Badge>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Key Insight:</strong> Steady decline in chronic homelessness since plan implementation, with
                    accelerated progress in 2024 due to increased housing placements.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Housing Placements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Monthly Housing Placements
                </CardTitle>
                <CardDescription>People successfully housed each month in 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-64 bg-gradient-to-t from-blue-50 to-white rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end justify-between h-32">
                        {chartData.housingPlacements.map((point, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="bg-blue-500 w-6 rounded-t" style={{ height: `${point.count * 4}px` }}></div>
                            <span className="text-xs text-gray-600 mt-2">{point.month.split(" ")[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-100 text-blue-800">+65% vs 2023</Badge>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Key Insight:</strong> Consistent growth in monthly housing placements, with peak performance
                    in summer months due to increased housing availability.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demographics & Outcomes */}
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demographics</CardTitle>
                <CardDescription>Population characteristics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Average Age</span>
                    <span className="font-semibold">42 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Male</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Female</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Non-binary</span>
                    <span className="font-semibold">2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Indigenous</span>
                    <span className="font-semibold">23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Housing Outcomes</CardTitle>
                <CardDescription>Success metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Housed in 2024</span>
                    <span className="font-semibold text-green-600">147</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retention Rate</span>
                    <span className="font-semibold text-green-600">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Time to Housing</span>
                    <span className="font-semibold">156 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support Services</span>
                    <span className="font-semibold">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Performance</CardTitle>
                <CardDescription>Operational metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Active Cases</span>
                    <span className="font-semibold">152</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Intakes</span>
                    <span className="font-semibold">23/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Providers</span>
                    <span className="font-semibold">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Housing Units</span>
                    <span className="font-semibold">186</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualitative Data - Lived Experience */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="mb-2">Lived Experience</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voices from the Community</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Statistics tell one part of the story. The experiences of individuals in our community provide essential
              context and insight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Having stable housing has allowed me to focus on my mental health and reconnect with my family. For the first time in years, I can think about my future.",
                author: "Michael, housed for 8 months",
                theme: "Housing Stability",
                color: "blue",
              },
              {
                quote:
                  "The coordinated support system made all the difference. Instead of telling my story over and over, I had one team helping me navigate everything I needed.",
                author: "Sarah, housed for 14 months",
                theme: "System Coordination",
                color: "teal",
              },
              {
                quote:
                  "I never thought I'd have my own place again. The support workers believed in me when I couldn't believe in myself. Now I volunteer to help others.",
                author: "David, housed for 2 years",
                theme: "Community Support",
                color: "green",
              },
              {
                quote:
                  "The hardest part was feeling invisible. This program didn't just give me housing – it gave me back my dignity and a sense that I matter.",
                author: "Jennifer, housed for 6 months",
                theme: "Dignity & Respect",
                color: "purple",
              },
              {
                quote:
                  "After years on the street, I was skeptical. But having housing with the right supports has changed everything. I'm working part-time now.",
                author: "Robert, housed for 11 months",
                theme: "Employment",
                color: "orange",
              },
              {
                quote:
                  "As someone with lived experience, being part of the planning process means our voices are finally being heard. That's how real change happens.",
                author: "Lisa, community advocate",
                theme: "Lived Expertise",
                color: "indigo",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-l-4 ${
                  testimonial.color === "blue"
                    ? "border-l-blue-500"
                    : testimonial.color === "teal"
                      ? "border-l-teal-500"
                      : testimonial.color === "green"
                        ? "border-l-green-500"
                        : testimonial.color === "purple"
                          ? "border-l-purple-500"
                          : testimonial.color === "orange"
                            ? "border-l-orange-500"
                            : "border-l-indigo-500"
                } hover:shadow-md transition-shadow`}
              >
                <CardContent className="pt-6">
                  <Quote
                    className={`h-8 w-8 mb-4 ${
                      testimonial.color === "blue"
                        ? "text-blue-200"
                        : testimonial.color === "teal"
                          ? "text-teal-200"
                          : testimonial.color === "green"
                            ? "text-green-200"
                            : testimonial.color === "purple"
                              ? "text-purple-200"
                              : testimonial.color === "orange"
                                ? "text-orange-200"
                                : "text-indigo-200"
                    }`}
                  />
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{testimonial.author}</span>
                    <Badge
                      variant="outline"
                      className={`${
                        testimonial.color === "blue"
                          ? "text-blue-600 border-blue-200"
                          : testimonial.color === "teal"
                            ? "text-teal-600 border-teal-200"
                            : testimonial.color === "green"
                              ? "text-green-600 border-green-200"
                              : testimonial.color === "purple"
                                ? "text-purple-600 border-purple-200"
                                : testimonial.color === "orange"
                                  ? "text-orange-600 border-orange-200"
                                  : "text-indigo-600 border-indigo-200"
                      }`}
                    >
                      {testimonial.theme}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sources & Methodology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Homeless Individuals and Families Information System (HIFIS)</li>
                  <li>• Coordinated Access System data</li>
                  <li>• Service provider reporting</li>
                  <li>• Point-in-Time counts</li>
                  <li>• Housing provider data</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monthly data validation processes</li>
                  <li>• Cross-system data verification</li>
                  <li>• Regular audits and quality checks</li>
                  <li>• Standardized reporting protocols</li>
                  <li>• Privacy and confidentiality protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
