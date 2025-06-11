import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Target, Download } from "lucide-react"

export default function CurrentPlanPage() {
  const strategies = [
    {
      title: "Increase Housing Supply",
      description: "Develop new supportive and affordable housing units",
      progress: 75,
      status: "In Progress",
      timeline: "2024-2026",
      outcomes: ["127 people housed", "24 new units opened", "3 projects in development"],
    },
    {
      title: "Strengthen Support Services",
      description: "Enhance mental health, addiction, and life skills support",
      progress: 85,
      status: "On Track",
      timeline: "2023-2025",
      outcomes: ["42 community partners engaged", "New case management model", "Integrated service delivery"],
    },
    {
      title: "Prevention & Diversion",
      description: "Prevent people from becoming chronically homeless",
      progress: 60,
      status: "In Progress",
      timeline: "2024-2027",
      outcomes: ["Early intervention programs", "Family reunification support", "Emergency assistance fund"],
    },
    {
      title: "System Coordination",
      description: "Improve coordination between service providers",
      progress: 90,
      status: "Nearly Complete",
      timeline: "2023-2024",
      outcomes: ["Coordinated access system", "Shared data platform", "Regular case conferencing"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Implementation Phase</Badge>
              <h1 className="text-4xl font-bold mb-4">Current Plan Status</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Track our progress toward ending chronic homelessness through evidence-based strategies and community
                collaboration.
              </p>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              <Download className="h-4 w-4 mr-2" />
              Download Full Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Overall Progress */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Overall Implementation Progress
              </CardTitle>
              <CardDescription>
                Comprehensive view of our plan implementation across all strategic areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Total Progress</span>
                    <span className="text-2xl font-bold text-blue-600">77%</span>
                  </div>
                  <Progress value={77} className="h-3" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <div className="text-sm text-gray-600">Strategies Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">18</div>
                    <div className="text-sm text-gray-600">Milestones Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2026</div>
                    <div className="text-sm text-gray-600">Target Completion</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategy Details */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategic Implementation Areas</h2>

          <div className="space-y-6">
            {strategies.map((strategy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{strategy.title}</CardTitle>
                      <CardDescription className="text-base">{strategy.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={strategy.status === "Nearly Complete" ? "default" : "secondary"}
                        className={
                          strategy.status === "Nearly Complete"
                            ? "bg-green-100 text-green-800"
                            : strategy.status === "On Track"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {strategy.status}
                      </Badge>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {strategy.timeline}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Progress</span>
                        <span className="font-bold text-blue-600">{strategy.progress}%</span>
                      </div>
                      <Progress value={strategy.progress} className="h-2" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Key Outcomes Achieved
                      </h4>
                      <ul className="space-y-1">
                        {strategy.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="text-gray-700 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-8">
              {[
                {
                  date: "2023 Q3",
                  title: "Plan Development",
                  status: "completed",
                  description: "Community engagement and plan finalization",
                },
                {
                  date: "2023 Q4",
                  title: "System Coordination Launch",
                  status: "completed",
                  description: "Coordinated access system implementation",
                },
                {
                  date: "2024 Q1",
                  title: "Housing Development",
                  status: "completed",
                  description: "First supportive housing units opened",
                },
                {
                  date: "2024 Q2",
                  title: "Service Enhancement",
                  status: "current",
                  description: "Strengthened support services rollout",
                },
                {
                  date: "2024 Q4",
                  title: "Prevention Programs",
                  status: "upcoming",
                  description: "Prevention and diversion initiatives",
                },
                {
                  date: "2025",
                  title: "Scale & Expand",
                  status: "upcoming",
                  description: "Full implementation across all strategies",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div
                    className={`absolute left-0 w-8 h-8 rounded-full border-4 ${
                      milestone.status === "completed"
                        ? "bg-green-500 border-green-200"
                        : milestone.status === "current"
                          ? "bg-blue-500 border-blue-200"
                          : "bg-gray-300 border-gray-200"
                    }`}
                  ></div>
                  <div className="ml-12">
                    <div className="flex items-center mb-1">
                      <Badge variant="outline" className="mr-3">
                        {milestone.date}
                      </Badge>
                      <h3 className="font-semibold text-lg">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
