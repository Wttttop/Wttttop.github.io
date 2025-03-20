'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGoogle, FaUniversity } from 'react-icons/fa'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { newsItems } from './lib/data'
import Link from 'next/link'

// Interface for Google Scholar data
interface ScholarData {
  citations: string;
  hIndex: string;
  i10Index: string;
  lastUpdated?: string;
  error?: string;
}

export default function Home() {
  // State for citation data
  const [scholarData, setScholarData] = useState<ScholarData>({
    citations: '777',
    hIndex: '10',
    i10Index: '20',
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch citation data on page load
  useEffect(() => {
    const fetchScholarData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/scholar');
        const data = await response.json();
        setScholarData(data);
      } catch (error) {
        console.error('Error fetching scholar data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScholarData();
  }, []);

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section id="about" className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden">
              <Image 
                src="/wutuo.jpg" 
                alt="Dr. Tuo Wu" 
                width={400} 
                height={400} 
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">Dr. Tuo Wu</h1>
            <h2 className="text-xl text-muted-foreground mb-4">Research Fellow</h2>
            <p className="mb-4">School of Electrical and Electronic Engineering, Nanyang Technological University (NTU)</p>
            
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:tuo.wu@ntu.edu.sg">tuo.wu@ntu.edu.sg</a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+65 84178500</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGoogle className="text-primary" />
                <a href="https://scholar.google.com/citations?user=xMbNr1UAAAAJ" target="_blank" rel="noopener noreferrer">
                  {isLoading ? (
                    <span>Google Scholar (Loading...)</span>
                  ) : (
                    <span>Google Scholar (Citations: {scholarData.citations}; h-index: {scholarData.hIndex})</span>
                  )}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* News Section */}
      <section id="news" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b flex items-center">
          News
          <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">New</span>
        </h2>
        <div className="space-y-4">
          {newsItems.slice(0, 4).map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-primary pl-4 py-2"
            >
              <div className="flex items-center gap-2">
                <p className="font-semibold">{item.title}</p>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <p className="text-muted-foreground">{item.content.substring(0, 100)}...</p>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-6"
          >
            <Link 
              href="/news"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md group"
            >
              View all news
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">Queen Mary University of London</h3>
              <span className="text-muted-foreground">London, UK</span>
            </div>
            <p className="mb-1">Ph.D. Electronic Engineering and Computer Science</p>
            <p className="text-sm text-muted-foreground">Sep. 2021 - Sep. 2024</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">Sun Yat-Sen University</h3>
              <span className="text-muted-foreground">Guangzhou, China</span>
            </div>
            <p className="mb-1">M.Sc in Wireless Electronic Physic</p>
            <p className="text-sm text-muted-foreground">Sep. 2018 - Jul. 2021</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">South China Normal University</h3>
              <span className="text-muted-foreground">Guangzhou, China</span>
            </div>
            <p className="mb-1">B.E. Communication Engineering</p>
            <p className="text-sm text-muted-foreground">Sep. 2013 - Jul. 2017</p>
          </motion.div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Research Interests</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <p className="mb-4">My research techniques focus on:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Wireless communications</li>
            <li>Signal processing</li>
            <li>Optimization algorithm</li>
            <li>Machine learning</li>
          </ul>
          
          <p className="mb-4">My research background and experience include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Wireless localization</li>
            <li>Fluid antenna systems (FAS)</li>
            <li>Reconfigurable intelligent surface (RIS)</li>
            <li>Non-orthogonal multiple access (NOMA)</li>
            <li>Over-the-air Computation</li>
            <li>Simultaneous wireless information and power transfer (SWIPT)</li>
            <li>Symbiotic radio backscatter</li>
          </ul>
          
          <p>I have experience in building communication platforms, allowing me to conduct experiments and apply various algorithms for testing on real-world systems.</p>
        </motion.div>
      </section>

      {/* Research Projects Section */}
      <section id="projects" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Research Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            <h3 className="text-lg font-semibold mb-2">FAS-Enabled Wireless Communications</h3>
            <p className="text-sm text-muted-foreground mb-3">2022 - Present</p>
            <p className="mb-3">Investigation of Fluid Antenna Systems (FAS) for enhanced wireless performance, focusing on adaptive positioning strategies for FAS to maximize system throughput and reliability.</p>
            <div className="flex items-center gap-1 text-primary text-sm">
              <span>Keywords:</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">FAS</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">NOMA</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">MIMO</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-lg font-semibold mb-2">RIS-Aided Wireless Localization</h3>
            <p className="text-sm text-muted-foreground mb-3">2021 - Present</p>
            <p className="mb-3">Developing novel localization algorithms that leverage reconfigurable intelligent surfaces to improve positioning accuracy in mmWave systems while addressing practical challenges such as faulty RIS elements.</p>
            <div className="flex items-center gap-1 text-primary text-sm">
              <span>Keywords:</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">RIS</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">Localization</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">mmWave</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <h3 className="text-lg font-semibold mb-2">Integrated Sensing and Communications (ISAC)</h3>
            <p className="text-sm text-muted-foreground mb-3">2023 - Present</p>
            <p className="mb-3">Exploring the synergy between sensing and communication functionalities in next-generation wireless systems, with a focus on fluid-antenna-assisted dual-functional radar-communication systems.</p>
            <div className="flex items-center gap-1 text-primary text-sm">
              <span>Keywords:</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">ISAC</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">DFRC</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">FAS</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-lg font-semibold mb-2">Short-Packet Communications for IoT</h3>
            <p className="text-sm text-muted-foreground mb-3">2020 - Present</p>
            <p className="mb-3">Investigating the theoretical foundations and performance optimization of short-packet communications for IoT applications, with a focus on NOMA and execution uncertainty in edge computing networks.</p>
            <div className="flex items-center gap-1 text-primary text-sm">
              <span>Keywords:</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">Short-Packet</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">URLLC</span>
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">IoT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Publications</h2>
        
        <div className="mb-4">
          {isLoading ? (
            <p className="font-semibold">Loading citation data...</p>
          ) : (
            <p className="font-semibold">
              Citations: {scholarData.citations}; h-index: {scholarData.hIndex}; i10-index: {scholarData.i10Index}
              {scholarData.lastUpdated && (
                <span className="text-xs ml-2 font-normal text-muted-foreground">(Last updated: {new Date(scholarData.lastUpdated).toLocaleDateString()})</span>
              )}
            </p>
          )}
          <p className="text-muted-foreground">25 articles published/accepted by IEEE, including IEEE JSAC, TWC, JSTSP, TVT, IoTJ.</p>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Selected Refereed Journals</h3>
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            <p>T. Wu, C. Pan, K. Zhi, H. Ren, M. Elkashlan, C. X. Wang, R. Schober, X. You, "Exploit High-Dimensional RIS Information to Localization: What Is the Impact of Faulty Element?," IEEE Journal on Selected Areas in Communications, vol. 42, no. 10, pp. 2803-2819, Oct. 2024.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card"
          >
            <p>T. Wu, C. Pan, Y. Pan, S. Hong, H. Ren, M. Elkashlan, F. Shu, J. Z. Wang, "Joint Angle Estimation Error Analysis and 3D Positioning Algorithm Design for mmWave Positioning System," IEEE Internet of Things Journal, vol. this.11, no. 2, pp. 2181-2197, Jan. 15, 2024.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <p>T. Wu, C. Pan, K. Zhi, H. Ren, M. Elkashlan, J. Z. Wang, "Employing High-Dimensional RIS Information for RIS-aided Localization Systems," IEEE Communications Letters, vol. 28, no. 9, pp. 2046-2050, 2024.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card"
          >
            <p>T. Wu, C. Pan, Y. Pan, H. Ren, M. Elkashlan, C.-X. Wang, "Fingerprint-Based mmWave Positioning System Aided by Reconfigurable Intelligent Surface," IEEE Wireless Communications Letters, vol. 12, no. 8, pp. 1379-1383, Aug. 2023.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <p>T. Wu, M. Jiang, Q. Zhang, Q. Li, J. Qin, "Beamforming Design in Multiple-Input-Multiple-Output Symbiotic Radio Backscatter Systems," IEEE Communications Letters, vol. 25, no. 6, pp. 1949-1953, June 2021.</p>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Link 
            href="/publications"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md group"
          >
            View all publications
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Honors and Awards Section */}
      <section id="awards" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Honors and Awards</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>First-class Scholarship, Sun Yat-Sen University</span>
              <span className="text-muted-foreground">2019, 2020</span>
            </li>
            <li className="flex justify-between">
              <span>Second-class Scholarship, Sun Yat-Sen University</span>
              <span className="text-muted-foreground">2018</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Professional Activities Section */}
      <section id="activities" className="section">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Professional Activities</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <ul className="space-y-2 list-disc pl-6">
            <li>Editor for IEEE Transactions on Communications.</li>
            <li>Guest Editor for IEEE Sensors "Advanced MIMO Technology-Enabled Integrated Sensing and Communication".</li>
            <li>Reviewer for IEEE JSAC, JSTSP, TWC, TCOM, TVT, ACCESS, WCL, CL, Network, ICC, GLOBECOM, VTC WCNC.</li>
            <li>Teaching assistant for answering questions; preparing PPT; grading exams in QMUL (2023-2024).</li>
          </ul>
        </motion.div>
      </section>
    </div>
  )
}
