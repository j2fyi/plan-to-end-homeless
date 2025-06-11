import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Search, FileText, BarChart3, Users, BookOpen, Calendar, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "The Plan to End Chronic Homelessness - Final Report 2024",
      description: "Comprehensive final report outlining strategies, implementation progress, and outcomes achieved.",
      category: "Reports",
      type: "PDF",
      size: "5.3 MB",
      date: "April 2024",
      downloads: 1247,
      featured: true,
    },
    {
      id: 2,
      title: "Roadmap to Functional Zero Funding Strategy",
      description:
        "Detailed funding strategy and resource allocation plan for achieving functional zero chronic homelessness.",
      category: "Strategy",
      type: "PDF",
      size: "988 KB",
      date: "October 2024",
      downloads: 892,
      featured: true,
    },
    {
      id: 3,
      title: "Lived Expertise Final Prototyping Report",
      description:
        "Report on community-led prototyping initiatives and recommendations from people with lived experience.",
      category: "Community",
      type: "PDF",
      size: "1.1 MB",
      date: "April 2024",
      downloads: 634,
      featured: true,
    },
    {
      id: 4,
      title: "Community Engagement Toolkit",
      description:
        "Resources and guidelines for engaging community members and stakeholders in homelessness initiatives.",
      category: "Toolkit",
      type: "ZIP",
      size: "2.4 MB",
      date: "July 2023",
      downloads: 456,
      featured: false,
    },
    {
      id: 5,
      title: "Q4 2024 Progress Dashboard",
      description: "Interactive dashboard showing key metrics, trends, and outcomes for the fourth quarter of 2024.",
      category: "Data",
      type: "Interactive",
      size: "N/A",
      date: "December 2024",
      downloads: 0,
      featured: false,
    },
    {
      id: 6,
      title: "Housing First Implementation Guide",
      description: "Best practices and implementation guidelines for Housing First approaches in Waterloo Region.",
      category: "Guidelines",
      type: "PDF",
      size: "1.8 MB",
      date: "September 2024",
      downloads: 723,
      featured: false,
    },
    {
      id: 7,
      title: "Service Provider Directory",
      description: "Comprehensive directory of housing, health, and support services available in Waterloo Region.",
      category: "Directory",
      type: "PDF",
      size: "856 KB",
      date: "November 2024",
      downloads: 1089,
      featured: false,
    },
    {
      id: 8,
      title: "Mid-Project Key Findings Report",
      description: "Analysis of community engagement findings and insights from the plan development phase.",
      category: "Research",
      type: "PDF",
      size: "1.2 MB",
      date: "August 2023",
      downloads: 567,
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Reports",
    "Strategy",
    "Community",
    "Toolkit",
    "Data",
    "Guidelines",
    "Directory",
    "Research",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Resource Library</Badge>
          <h1 className="text-4xl font-bold mb-4">Resources & Documents</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Access reports, toolkits, research, and other resources to support your work in addressing chronic
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
              <Input placeholder="Search resources..." className="pl-10" />
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

      {/* Featured Resources */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={
                          resource.category === "Reports"
                            ? "bg-blue-100 text-blue-800"
                            : resource.category === "Strategy"
                              ? "bg-green-100 text-green-800"
                              : resource.category === "Community"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-gray-100 text-gray-800"
                        }
                      >
                        {resource.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="h-4 w-4 mr-1" />
                        {resource.type}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Size: {resource.size}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {resource.date}
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h2>

          <div className="space-y-4">
            {resources
              .filter((resource) => !resource.featured)
              .map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {resource.category === "Toolkit" && <BookOpen className="h-6 w-6 text-blue-600" />}
                        {resource.category === "Data" && <BarChart3 className="h-6 w-6 text-blue-600" />}
                        {resource.category === "Guidelines" && <FileText className="h-6 w-6 text-blue-600" />}
                        {resource.category === "Directory" && <Users className="h-6 w-6 text-blue-600" />}
                        {resource.category === "Research" && <Search className="h-6 w-6 text-blue-600" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge
                            variant="outline"
                            className={
                              resource.category === "Toolkit"
                                ? "text-green-600 border-green-200"
                                : resource.category === "Data"
                                  ? "text-purple-600 border-purple-200"
                                  : resource.category === "Guidelines"
                                    ? "text-orange-600 border-orange-200"
                                    : resource.category === "Directory"
                                      ? "text-teal-600 border-teal-200"
                                      : "text-blue-600 border-blue-200"
                            }
                          >
                            {resource.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{resource.type}</span>
                        </div>

                        <h3 className="font-semibold text-gray-900 mb-1 truncate">{resource.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{resource.description}</p>

                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {resource.date}
                          {resource.size !== "N/A" && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{resource.size}</span>
                            </>
                          )}
                          {resource.downloads > 0 && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{resource.downloads} downloads</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {resource.type === "Interactive" ? (
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Specific Resource?</h2>
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Let us know what resources would be helpful for your work.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700">Request a Resource</Button>
        </div>
      </section>
    </div>
  )
}
