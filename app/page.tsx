import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Community-Driven Initiative</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Plan to End Chronic Homelessness</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            A collaborative roadmap for strategies, resources and timelines to end chronic homelessness in Waterloo
            Region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/current-plan" className="flex items-center">
                View Current Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Progress at a Glance</h2>
            <p className="text-lg text-gray-600">Real progress toward ending chronic homelessness in our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-green-600">127</CardTitle>
                <CardDescription>People Successfully Housed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+23% this quarter</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-blue-600">85%</CardTitle>
                <CardDescription>Plan Implementation Progress</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={85} className="h-2" />
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-purple-600">42</CardTitle>
                <CardDescription>Community Partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-purple-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Active collaborators</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-orange-600">$2.4M</CardTitle>
                <CardDescription>Funding Secured</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-orange-600">
                  <Target className="h-4 w-4 mr-1" />
                  <span>For 2024-2025</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Approach */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800">Community-Centered</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">In Community, By Community, For Community</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our approach centers the voices of people with lived expertise. Together with community partners, we're
                creating sustainable solutions that address the root causes of chronic homelessness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Lived expertise guides every decision</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Evidence-based strategies and interventions</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Collaborative partnerships across sectors</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Community+Collaboration"
                alt="Community members working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
              <p className="text-lg text-gray-600">Recent progress and community wins</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/updates">View All Updates</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Success Story</Badge>
                  <span className="text-sm text-gray-500">Dec 15, 2024</span>
                </div>
                <CardTitle className="text-lg">New Supportive Housing Opens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  24 new units of supportive housing opened in downtown Kitchener, providing permanent homes for
                  individuals experiencing chronic homelessness.
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600">
                  Read more →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Milestone
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 10, 2024</span>
                </div>
                <CardTitle className="text-lg">Funding Strategy Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regional Council approved the comprehensive funding strategy, securing resources for the next phase of
                  implementation.
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600">
                  Read more →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Community
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 5, 2024</span>
                </div>
                <CardTitle className="text-lg">Lived Expertise Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Community members with lived experience shared insights at the quarterly stakeholder meeting, shaping
                  future priorities.
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600">
                  Read more →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community Effort</h2>
          <p className="text-xl mb-8 text-teal-100">
            Whether you're a service provider, community member, or organization, there are many ways to contribute to
            ending chronic homelessness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/resources">Access Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
