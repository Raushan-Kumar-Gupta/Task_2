
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Settings, Users, Layout, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-bottom');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
      {children}
    </div>
  );
};

const Index = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      role: "CEO, TechStart",
      content: "Working with the team has been an absolute pleasure. They delivered exactly what we needed, on time and with exceptional quality.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Mark Johnson",
      role: "Marketing Director",
      content: "The website they created for us has doubled our conversion rate. Incredible work and outstanding support.",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Product Owner",
      content: "I've worked with many development teams, but none have been as professional and detail-oriented as this one.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "User-Centered Design",
      description: "Create intuitive interfaces that put your users first and deliver exceptional experiences.",
      icon: Users
    },
    {
      id: 2,
      title: "Customizable Components",
      description: "Flexible, reusable components that can be customized to fit your specific needs.",
      icon: Settings
    },
    {
      id: 3,
      title: "Responsive Layouts",
      description: "Designs that look great on all devices, from desktop to mobile and everything in between.",
      icon: Layout
    },
    {
      id: 4,
      title: "SEO Optimized",
      description: "Built with best practices to help your site rank better in search engines.",
      icon: Search
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 pb-16 lg:pb-32 md:pt-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <div>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Modern Web Solutions
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Create Stunning <span className="text-primary">Digital Experiences</span>
                </h1>
              </div>
              <p className="text-lg text-gray-600 max-w-xl">
                We build beautiful, responsive websites that drive results. Our modern approach focuses on user experience, performance, and design excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="font-medium">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="font-medium">
                  Learn More
                </Button>
              </div>
              <div className="pt-8">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`} 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">500+</span> happy clients
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl transform -rotate-6"></div>
                <div className="animate-float relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Web Design"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full filter blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24" id="features">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Build Modern Websites
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive suite of features enables you to create beautiful, functional websites that engage users and drive results.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <RevealOnScroll key={feature.id}>
                <Card className="feature-card-hover border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 bg-primary/10 text-primary`}>
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Amazing Websites?</h2>
              <p className="text-primary-foreground/90 text-lg">
                Get started today and transform your digital presence with our modern web solutions.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solutions Tailored to Your Needs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive web solutions designed to meet your specific requirements and help you achieve your goals.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RevealOnScroll>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Web Development"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-gray-600 mb-4">
                    Custom website development with clean code, responsive design, and optimal performance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Responsive Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>SEO Best Practices</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Digital Marketing"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Strategic digital marketing to increase your online visibility and drive qualified traffic.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Search Engine Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Social Media Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Content Marketing</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Mobile App Development"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">App Development</h3>
                  <p className="text-gray-600 mb-4">
                    Custom mobile application development for iOS and Android platforms.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Native & Cross-Platform</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>User-Friendly Interface</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Ongoing Support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.id}>
                <Card className="bg-white border-0 shadow-lg h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      {/* Star rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 italic flex-grow">"{testimonial.content}"</p>
                    </div>
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let's discuss how we can help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-medium">
                  Contact Us
                </Button>
                <Button variant="outline" size="lg" className="font-medium">
                  View Our Work
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
