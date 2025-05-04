
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';
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

const About = () => {
  // Team members data
  const team = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "10+ years experience in web development and digital strategy.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Creative Director",
      bio: "Expert in UX/UI design with a background in visual arts.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer specialized in React and Node.js.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Jessica Rodriguez",
      role: "Marketing Specialist",
      bio: "Digital marketing expert focused on growth strategies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  // Skills data
  const skills = [
    { name: "Web Development", percentage: 95 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "Digital Marketing", percentage: 85 },
    { name: "Mobile Development", percentage: 80 },
    { name: "E-commerce Solutions", percentage: 88 },
  ];
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a team of passionate designers and developers creating extraordinary digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <RevealOnScroll>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-6"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our Team"
                    className="relative rounded-xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full filter blur-2xl"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl"></div>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="lg:w-1/2">
              <RevealOnScroll>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating Digital Excellence Since 2015</h2>
                <p className="text-gray-600 mb-6">
                  Founded with a vision to bridge the gap between technology and human experience, we've been on a mission to create digital solutions that not only look good but perform exceptionally well.
                </p>
                <p className="text-gray-600 mb-8">
                  Our journey began with small projects, but our commitment to quality and client satisfaction quickly earned us a reputation for excellence. Today, we work with businesses of all sizes, helping them achieve their digital goals with tailored solutions that drive real results.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-md p-2 mr-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Mission</h3>
                      <p className="text-gray-600">To deliver exceptional digital experiences that drive business growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-md p-2 mr-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Vision</h3>
                      <p className="text-gray-600">To be the leading provider of innovative digital solutions globally.</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Core Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Principles That Guide Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our values define how we work and interact with our clients, partners, and each other.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RevealOnScroll>
              <div className="bg-white rounded-xl p-8 shadow-md h-full feature-card-hover">
                <div className="bg-primary/10 text-primary rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear, honest communication with our clients throughout every step of the process.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-white rounded-xl p-8 shadow-md h-full feature-card-hover">
                <div className="bg-primary/10 text-primary rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-white rounded-xl p-8 shadow-md h-full feature-card-hover">
                <div className="bg-primary/10 text-primary rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We hold ourselves to the highest standards in every aspect of our work.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-white rounded-xl p-8 shadow-md h-full feature-card-hover">
                <div className="bg-primary/10 text-primary rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients to ensure their vision is realized in the final product.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Our Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <RevealOnScroll>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Competencies</h2>
                <p className="text-gray-600 mb-8">
                  Our team brings together a diverse set of skills and expertise, allowing us to tackle projects of any complexity with confidence.
                </p>
                
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <Progress value={skill.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="lg:w-1/2">
              <RevealOnScroll>
                <div className="grid grid-cols-1 gap-6">
                  <div className="rounded-xl bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Expert team with proven track record</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Tailored solutions for specific business needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Committed to delivering on time and within budget</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Ongoing support and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Transparent communication throughout the project</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                    <p className="text-gray-600 mb-4">
                      We follow a proven methodology that ensures quality, efficiency, and client satisfaction:
                    </p>
                    <ol className="space-y-2">
                      <li className="flex">
                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 shrink-0">1</span>
                        <span>Discovery & Requirements Analysis</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 shrink-0">2</span>
                        <span>Planning & Design</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 shrink-0">3</span>
                        <span>Development & Implementation</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 shrink-0">4</span>
                        <span>Testing & Quality Assurance</span>
                      </li>
                      <li className="flex">
                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 shrink-0">5</span>
                        <span>Deployment & Ongoing Support</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the People Behind Our Success
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our talented team of professionals is the backbone of our company and the reason for our success.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <RevealOnScroll key={member.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg text-center feature-card-hover">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-primary-foreground/90 text-lg max-w-xl">
                Let's discuss how we can help you achieve your digital goals. Contact us today for a free consultation.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
