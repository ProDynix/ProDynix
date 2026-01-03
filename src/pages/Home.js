import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button, Card, SectionHeading } from '../components';

// Icons for solution areas
const Icons = {
  Automation: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Product: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Code: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  AI: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Custom: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
};

const Home = () => {
  const solutionAreas = [
    {
      icon: Icons.Automation,
      title: 'Business Automation',
      description: 'Streamline your operations with intelligent automation for gyms, clinics, appointments, and attendance systems.',
      link: '/solutions',
    },
    {
      icon: Icons.Product,
      title: 'Product Solutions',
      description: 'Ready-to-deploy platforms like Prodynix that transform how businesses manage their daily operations.',
      link: '/products',
    },
    {
      icon: Icons.Code,
      title: 'Custom Development',
      description: 'Tailored web applications, dashboards, and internal tools built specifically for your business needs.',
      link: '/services',
    },
    {
      icon: Icons.AI,
      title: 'AI & Digital Solutions',
      description: 'Modern digital presence with AI-powered content, social media management, and automation-driven marketing.',
      link: '/solutions',
    },
  ];

  return (
    <div className="pt-16 sm:pt-16 lg:pt-20">
      <Helmet>
        <title>Prodynix | Intelligent Business Automation Solutions</title>
        <meta name="description" content="Prodynix builds intelligent automation solutions for gyms, clinics, and businesses. Custom software, AI solutions, and ready-to-deploy platforms that transform operations." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-hero-gradient bg-grid">
        {/* Background Elements - Hidden on small screens for performance */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-forge-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-forge-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-forge-accent/10 border border-forge-accent/20 rounded-full text-xs sm:text-sm text-forge-accent mb-6 sm:mb-8 animate-fade-in">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-forge-accent rounded-full mr-2 animate-pulse"></span>
              Technology & Automation Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-forge-gray-50 leading-tight mb-4 sm:mb-6 animate-slide-up">
              Engineering{' '}
              <span className="text-highlight">Intelligent</span>
              <br />
              Automation
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl lg:text-2xl text-forge-slate-400 leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-slide-up">
              We build smart, reliable technology solutions that automate and simplify real business operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up">
              <Button to="/solutions" size="lg" fullWidthMobile>
                Explore Solutions
                <Icons.Arrow />
              </Button>
              <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                Request a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-forge-slate-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-forge-slate-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-forge-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <SectionHeading
                subtitle="Who We Are"
                title="More Than Just Development"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-forge-slate-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Prodynix isn't your typical tech company. We're engineers, problem-solvers, and automation specialists focused on building solutions that actually work in the real world.
                </p>
                <p>
                  Whether it's automating a gym's membership management, building a clinic's appointment system, or creating custom business tools—we approach every project with the same commitment to quality and reliability.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button to="/how-we-work" variant="secondary" fullWidthMobile>
                  Learn How We Work
                  <Icons.Arrow />
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-forge-slate-800 to-forge-navy border border-forge-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 card-glow">
                <div className="h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    {[
                      { label: 'Automation', value: 'Business Operations' },
                      { label: 'Software', value: 'Custom Solutions' },
                      { label: 'Digital', value: 'AI & Marketing' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-forge-dark/50 rounded-lg border border-forge-slate-700/50"
                      >
                        <span className="text-forge-slate-400 text-sm">{item.label}</span>
                        <span className="text-forge-gray-50 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative element - Hidden on mobile */}
              <div className="absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-forge-accent/10 rounded-xl -z-10 hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Build"
            title="Solutions That Drive Results"
            description="From automation platforms to custom software, we deliver technology that transforms how your business operates."
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {solutionAreas.map((solution, index) => (
              <Link key={index} to={solution.link}>
                <Card className="h-full group cursor-pointer">
                  <div className="text-forge-accent mb-4 group-hover:text-forge-accent-light transition-colors">
                    <solution.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-forge-gray-100 mb-2 group-hover:text-forge-accent transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-forge-slate-400 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-forge-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-forge-slate-800 to-forge-darker border border-forge-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-16 card-glow">
            {/* Background Pattern - Reduced on mobile */}
            <div className="absolute inset-0 bg-grid opacity-20 sm:opacity-30"></div>
            <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-forge-accent/10 rounded-full blur-3xl hidden sm:block"></div>

            <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div>
                <span className="inline-block text-forge-accent font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                  Featured Product
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forge-gray-50 mb-4 sm:mb-6">
                  Prodynix Platform
                </h2>
                <p className="text-forge-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Our flagship automation platform designed for gyms and businesses. Manage memberships, track attendance, handle appointments, and streamline operations—all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button to="/products" size="lg" fullWidthMobile>
                    Learn More
                    <Icons.Arrow />
                  </Button>
                  <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                    Request Demo
                  </Button>
                </div>
              </div>

              {/* Product Visual */}
              <div className="relative">
                <div className="bg-forge-slate-800/50 border border-forge-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500/70 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500/70 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500/70 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-forge-slate-700/50 rounded w-3/4"></div>
                    <div className="h-4 bg-forge-slate-700/50 rounded w-1/2"></div>
                    <div className="h-20 bg-forge-accent/10 border border-forge-accent/20 rounded mt-4"></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-forge-slate-700/30 rounded"></div>
                      <div className="h-16 bg-forge-slate-700/30 rounded"></div>
                      <div className="h-16 bg-forge-slate-700/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Preview Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-forge-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Work"
            title="Real Solutions We've Built"
            description="From our flagship product to internal automation projects and digital content."
            className="mb-8 sm:mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* Prodynix Product */}
            <Link to="/work">
              <Card className="h-full group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-forge-accent/10 border border-forge-accent/20 rounded text-xs text-forge-accent font-medium">
                    Product
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-forge-gray-100 mb-2 group-hover:text-forge-accent transition-colors">
                  Prodynix Platform
                </h3>
                <p className="text-forge-slate-400 text-sm leading-relaxed">
                  Gym and business automation platform handling memberships, check-ins, and scheduling.
                </p>
              </Card>
            </Link>

            {/* Internal Projects */}
            <Link to="/work">
              <Card className="h-full group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-forge-slate-800 border border-forge-slate-700 rounded text-xs text-forge-slate-400">
                    Internal Work
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-forge-gray-100 mb-2 group-hover:text-forge-accent transition-colors">
                  Automation Projects
                </h3>
                <p className="text-forge-slate-400 text-sm leading-relaxed">
                  Clinic appointments, attendance systems, and workflow automation frameworks.
                </p>
              </Card>
            </Link>

            {/* Digital & AI */}
            <Link to="/work">
              <Card className="h-full group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                    Digital
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-forge-gray-100 mb-2 group-hover:text-forge-accent transition-colors">
                  Digital & AI Work
                </h3>
                <p className="text-forge-slate-400 text-sm leading-relaxed">
                  AI videos, social media content, and automation-driven creative workflows.
                </p>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Button to="/work" variant="outline" fullWidthMobile>
              View All Work
              <Icons.Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="The Team"
            title="Meet the Founders"
            description="The people behind Prodynix, committed to building technology that works."
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="group bg-gradient-to-br from-forge-slate-800/50 to-forge-navy/30 border border-forge-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-forge-accent/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-forge-slate-700/50 border-2 border-forge-slate-600/50 overflow-hidden mb-5 group-hover:border-forge-accent/40 transition-colors">
                  {/* Placeholder - Replace with actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-forge-accent/20 to-forge-slate-700 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-forge-accent/60">S</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-forge-gray-50 mb-1">
                  Shvang Patel
                </h3>
                <p className="text-forge-accent font-medium text-sm sm:text-base mb-3">
                  Co-Founder & Engineering
                </p>
                <p className="text-forge-slate-400 text-sm sm:text-base leading-relaxed max-w-xs">
                  Focused on building scalable automation solutions and turning complex business problems into elegant software.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="group bg-gradient-to-br from-forge-slate-800/50 to-forge-navy/30 border border-forge-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-forge-accent/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-forge-slate-700/50 border-2 border-forge-slate-600/50 overflow-hidden mb-5 group-hover:border-forge-accent/40 transition-colors">
                  {/* Placeholder - Replace with actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-forge-accent/20 to-forge-slate-700 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-forge-accent/60">A</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-forge-gray-50 mb-1">
                  Co-Founder Name
                </h3>
                <p className="text-forge-accent font-medium text-sm sm:text-base mb-3">
                  Co-Founder & Operations
                </p>
                <p className="text-forge-slate-400 text-sm sm:text-base leading-relaxed max-w-xs">
                  Driving business strategy and ensuring every solution delivers real value to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-forge-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              subtitle="Ready to Start?"
              title="Let's Build Something Together"
              description="Whether you have a specific project in mind or want to explore how automation can help your business, we're here to help."
              className="mb-8 sm:mb-10"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button to="/contact" size="lg" fullWidthMobile>
                Contact Us
                <Icons.Arrow />
              </Button>
              <Button
                href="https://wa.me/1234567890"
                variant="secondary"
                size="lg"
                fullWidthMobile
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
