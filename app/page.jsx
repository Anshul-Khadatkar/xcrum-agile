import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";
import SprintXLogo from "@/components/SprintXLogo";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const faqs = [
  {
    question: "What is SprintX?",
    answer:
      "SprintX is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does SprintX compare to other project management tools?",
    answer:
      "SprintX offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is SprintX suitable for small teams?",
    answer:
      "Absolutely! SprintX is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from SprintX's features.",
  },
  {
    question: "What key features does SprintX offer?",
    answer:
      "SprintX provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can SprintX handle multiple projects simultaneously?",
    answer:
      "Yes, SprintX is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes SprintX ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While SprintX is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate">
        <BackgroundBeams />
        <section className="container mx-auto py-37 text-center relative z-10">
          <h1 className="text-6xl pt-10 sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-10 flex flex-col">
            Streamline Your Workflow <br />
            <span className="flex mx-auto gap-3 sm:gap-4 items-center">
              with
              {/* <Image
                src="/SprintXsmall.png"
                alt="SprintX Logo"
                width={400}
                height={80}
                className="h-14 sm:h-24 w-auto object-contain"
                priority
              /> */}
              <Highlight>
                <SprintXLogo />
              </Highlight>
            </span>
          </h1>
          <p className="text-xl text-gray-300 pt-3 mb-10 max-w-3xl mx-auto">
            Empower your team with our intuitive project management solution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/onboarding">
              <Button size="lg">
                Get Started <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <HoverBorderGradient key={index}>
                <Card className="bg-gray-800 border-0">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </HoverBorderGradient>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Potential Collaborators
          </h2>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-60% px-10 mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-12">
            Join thousands of teams already using SprintX to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
