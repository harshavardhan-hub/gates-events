import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition.jsx';
import { SITE_CONFIG, ASSETS } from '../utils/constants.js';

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>{SITE_CONFIG.name} - About GATES Institute</title>
        <meta name="description" content="Learn about GATES Institute of Technology, established in 2001 to provide quality technical education in the Rayalaseema region." />
        <meta property="og:title" content={`${SITE_CONFIG.name} - About GATES Institute`} />
        <meta property="og:description" content="Learn about GATES Institute of Technology and our commitment to technical education and community development." />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About GATES Institute
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Empowering minds, building futures, and serving the community since 2001
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Institute History */}
            <div className="card mb-12">
              <div className="card-header">
                <h2 className="text-2xl md:text-3xl font-bold">Our Foundation</h2>
              </div>
              <div className="card-body">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    G.Raghunatha Reddy Educational Trust was established in the year 2000 by like minded professionals and NRI's who wanted to contribute to the growth of the region to which they belong. What best way could one think of other than starting an institution which brings in technical education to the door steps of this drought prone Rayalaseema region and improves the employability of rural youth. There were very few colleges that offered engineering education at that time in the entire state of Andhra Pradesh. Students were going to other states to pursue engineering education which many could not afford.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Under the aegis of G.Raghunatha Reddy Educational Trust, GATES Institute of Technology was established in the year 2001 in Gooty Ananthapuramu (village), Ananthapur Dist. We took the inspiration from the innovation and philanthropy of Bill Gates, who spread the magic of computers while giving back to less fortunate through his charities around the globe. GATES Institute of Technology seeks to do the same – Spreading quality technical education throughout the region, while still giving back to the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Growth & Development */}
            <div className="card mb-12">
              <div className="card-header">
                <h2 className="text-2xl md:text-3xl font-bold">Growth & Excellence</h2>
              </div>
              <div className="card-body">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The institution stood firm on the values it believed and evolved as one of the best colleges in the region. The institution which started with an intake of 150 students in 2001 has gradually grown to current intake of 930 students and the facilities and infrastructure are being improved continuously to facilitate quality learning. The Institute first started with under graduate courses in engineering and later on added Post graduate programs in Engineering and Management sciences. So far nearly 3750 students have graduated from GATES. GATES provides direct employment to nearly 250 people and many more indirectly.
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">930</div>
                    <div className="text-gray-600 text-sm">Current Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3750+</div>
                    <div className="text-gray-600 text-sm">Graduates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">250+</div>
                    <div className="text-gray-600 text-sm">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24</div>
                    <div className="text-gray-600 text-sm">Years Legacy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Service */}
            <div className="card mb-12">
              <div className="card-header">
                <h2 className="text-2xl md:text-3xl font-bold">Community Impact</h2>
              </div>
              <div className="card-body">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    GATES along with providing the quality technical education took up many activities for the overall development of the region in which they are located. Being pioneers in setting up an institution completely run by solar power, GATES educates the people in the region by regularly conducting solar awareness programs for school and college students.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    GATES conducts medical camps, blood donation camps, eye camps for the people in nearby villages. GATES distributes notebooks and uniforms in the nearby schools for poor students. GATES also helped the farmers in the region by digging canals and cleaning water tanks. Plates, cups and blankets are distributed to aged and needy. GATES in a way to inject the idea of social responsibility and teaching the moral of giving back to the society, encourages participation of students in all these activities.
                  </p>
                </div>

                {/* Community Activities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Healthcare Initiatives</h4>
                      <p className="text-gray-600 text-sm">Medical camps, blood donation drives, and eye care programs for rural communities.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Educational Support</h4>
                      <p className="text-gray-600 text-sm">Free notebooks, uniforms, and educational resources for underprivileged students.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solar Awareness</h4>
                      <p className="text-gray-600 text-sm">Solar education programs and sustainable energy awareness campaigns.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Infrastructure Development</h4>
                      <p className="text-gray-600 text-sm">Canal digging, water tank cleaning, and rural infrastructure support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Management Section */}
            <div className="card mb-12">
              <div className="card-header">
                <h2 className="text-2xl md:text-3xl font-bold">GATES Management</h2>
              </div>
              <div className="card-body">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-8">
                    GATES Institute of Technology was established by G.Raghunatha Reddy Educational Trust in 2001 with a vision to offer quality technical education to the youth of Rayalaseema region while still giving back to the community.
                  </p>
                </div>

                {/* Management Team */}
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Team</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          GR
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Sri. G.Raghunatha Reddy</h4>
                          <p className="text-primary font-medium">Founder & Chairman</p>
                          <p className="text-gray-600 mt-2">
                            The trust was Founded by Sri G. Raghunatha Reddy who is an engineer himself, with a vision to bring quality technical education to the Rayalaseema region.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Institute Address</h4>
                        <div className="space-y-2 text-gray-600">
                          <p>GATES Institute of Technology</p>
                          <p>Gooty Ananthapuramu Village</p>
                          <p>Ananthapur District</p>
                          <p>Andhra Pradesh, India</p>
                          <p>PIN: 515401</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Contact Details</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-gray-600">+91 8555 999 000</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-600">info@gatesit.ac.in</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                            <span className="text-gray-600">www.gatesit.ac.in</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-accent rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Legacy</h2>
              <p className="text-lg mb-6 text-gray-100">
                Be part of GATES Events 2K25 and experience the spirit of innovation, 
                community service, and academic excellence.
              </p>
              <a
                href={SITE_CONFIG.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-cyan-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
              >
                Register for Events
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7l10 10M17 7v4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
