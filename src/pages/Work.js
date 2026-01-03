import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components';

const Work = () => {
  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <Helmet>
        <title>Our Work | Prodynix</title>
        <meta name="description" content="Explore Prodynix projects and case studies. See how we help businesses automate and scale with intelligent solutions." />
      </Helmet>

      {/* Coming Soon Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-hero-gradient bg-grid">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-forge-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-forge-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forge-accent/10 border border-forge-accent/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-forge-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-forge-accent/10 border border-forge-accent/20 rounded-full text-xs sm:text-sm text-forge-accent font-medium">
              <span className="w-1.5 h-1.5 bg-forge-accent rounded-full mr-2 animate-pulse"></span>
              Coming Soon
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-forge-gray-50 leading-tight mb-4 sm:mb-6">
            Work in Progress
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-forge-slate-400 leading-relaxed mb-3 sm:mb-4 max-w-2xl mx-auto">
            We're currently preparing detailed case studies and project showcases.
          </p>

          {/* Supporting Line */}
          <p className="text-sm sm:text-base text-forge-slate-500 mb-8 sm:mb-10 max-w-xl mx-auto">
            Check back soon to see how we help businesses automate and scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button to="/contact" size="lg" fullWidthMobile>
              Request a Demo
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button to="/solutions" variant="outline" size="lg" fullWidthMobile>
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
