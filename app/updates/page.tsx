import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Search, ExternalLink, Users, Home, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

export default function UpdatesPage() {
  const updates = [
    {
      id: 1,
      title: "New Supportive Housing Complex Opens in Downtown Kitchener",
      excerpt:
        "24 new units of supportive housing officially opened, providing permanent homes for individuals experiencing chronic homelessness with on-site support services.",
      date: "December 15, 2024",
      category: "Housing",
      type: "Success Story",
      author: "Housing Development Team",
      readTime: "3 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Regional Council Approves Comprehensive Funding Strategy",
      excerpt:
        "Council unanimously approved the funding strategy for 2025-2027, securing $8.2M in resources for continued plan implementation and expansion.",
      date: "December 10, 2024",
      category: "Funding",
      type: "Milestone",
      author: "Policy Team",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Lived Expertise Panel Shapes Future Priorities",
      excerpt:
        "Community members with lived experience shared insights at the quarterly stakeholder meeting, directly influencing service delivery improvements.",
      date: "December 5, 2024",
      category: "Community",
      type: "Community Voice",
      author: "Engagement Team",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Q4 Progress Report: 89% Housing Retention Rate Achieved",
      excerpt:
        "Latest quarterly data shows continued success in housing retention, with comprehensive support services contributing to positive outcomes.",
      date: "November 28, 2024",
      category: "Data",
      type: "Progress Report",
      author: "Data Analytics Team",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Partnership Expansion: Three New Service Providers Join Initiative",
      excerpt:
        "Mental health, addiction services, and employment support organizations formally join the coordinated response system.",
      date: "November 20, 2024",
      category: "Partnerships",
      type: "Announcement",
      author: "Partnership Team",
      readTime: "3 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Community Celebration: 100th Person Successfully Housed This Year",
      excerpt:
        "Milestone achievement celebrated with community partners, highlighting the collaborative approach that makes success possible.",
      date: "November 15, 2024",
      category: "Community",
      type: "Celebration",
      author: "Community Team",
      readTime: "4 min read",
      featured: false,
    },
  ]

  const categories = ["All", "Housing", "Funding", "Community", "Data", "Partnerships"]
  const types = [
    "All",
    "Success Story",
    "Milestone",
    "Progress Report",
    "Announcement",
    "Community Voice",
    "Celebration",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Latest News</Badge>
          <h1 className="text-4xl font-bold mb-4">Updates & Progress</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Stay informed about our progress, community wins, and the latest developments in ending chronic
            homelessness.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search updates..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Updates */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Updates</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {updates
              .filter((update) => update.featured)
              .map((update) => (
                <Card key={update.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gradient-to-r from-blue-100 to-teal-100 relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=600&text=${update.category}+Update`}
                      alt={update.title}
                      width={600}
                      height={300}
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={
                          update.type === "Success Story"
                            ? "bg-green-100 text-green-800"
                            : update.type === "Milestone"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                        }
                      >
                        {update.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {update.date}
                      </div>
                      <span>{update.readTime}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight">{update.title}</CardTitle>
                    <CardDescription className="text-base">{update.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">By {update.author}</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Read More <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Updates */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Updates</h2>

          <div className="space-y-6">
            {updates
              .filter((update) => !update.featured)
              .map((update) => (
                <Card key={update.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          {update.category === "Housing" && <Home className="h-8 w-8 text-gray-600" />}
                          {update.category === "Community" && <Users className="h-8 w-8 text-gray-600" />}
                          {update.category === "Data" && <TrendingUp className="h-8 w-8 text-gray-600" />}
                          {update.category === "Partnerships" && <Award className="h-8 w-8 text-gray-600" />}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className={
                              update.type === "Success Story"
                                ? "text-green-600 border-green-200"
                                : update.type === "Milestone"
                                  ? "text-blue-600 border-blue-200"
                                  : update.type === "Progress Report"
                                    ? "text-purple-600 border-purple-200"
                                    : update.type === "Announcement"
                                      ? "text-orange-600 border-orange-200"
                                      : update.type === "Community Voice"
                                        ? "text-teal-600 border-teal-200"
                                        : "text-pink-600 border-pink-200"
                            }
                          >
                            {update.type}
                          </Badge>
                          <Badge variant="secondary">{update.category}</Badge>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{update.title}</h3>
                        <p className="text-gray-600 mb-3">{update.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {update.date} • {update.readTime} • By {update.author}
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            Read More <ExternalLink className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-teal-100 mb-8">
            Get the latest updates on our progress and community initiatives delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-teal-600 hover:bg-teal-50 whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
