'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Interface for Google Scholar data
interface ScholarData {
  citations: string;
  hIndex: string;
  i10Index: string;
  lastUpdated?: string;
  error?: string;
}

export default function Publications() {
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
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 mb-6 text-primary hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-2">Publications</h1>
        <p className="text-muted-foreground">
          {isLoading ? (
            <span>Loading citation data...</span>
          ) : (
            <span>Citations: {scholarData.citations}; h-index: {scholarData.hIndex}; i10-index: {scholarData.i10Index}</span>
          )}
          {!isLoading && scholarData.lastUpdated && (
            <span className="text-xs ml-2">(Last updated: {new Date(scholarData.lastUpdated).toLocaleDateString()})</span>
          )}
        </p>
        <p className="text-muted-foreground">
          25 articles published/accepted by IEEE, including IEEE JSAC, TWC, JSTSP, TVT, IoTJ.
        </p>
      </div>

      {/* Refereed Journals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Refereed Journals</h2>
        <div className="space-y-4">
          {journals.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card"
            >
              <p>{paper}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Under Review Journals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Under Review Journals</h2>
        <div className="space-y-4">
          {underReview.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card"
            >
              <p>{paper}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conference Papers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Conference Papers</h2>
        <div className="space-y-4">
          {conferences.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card"
            >
              <p>{paper}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

// Data for publications
const journals = [
  "T. Wu, C. Pan, K. Zhi, H. Ren, M. Elkashlan, C. X. Wang, R. Schober, X. You, \"Exploit High-Dimensional RIS Information to Localization: What Is the Impact of Faulty Element?,\" IEEE Journal on Selected Areas in Communications, vol. 42, no. 10, pp. 2803-2819, Oct. 2024.",
  "T. Wu, C. Pan, Y. Pan, S. Hong, H. Ren, M. Elkashlan, F. Shu, J. Z. Wang, \"Joint Angle Estimation Error Analysis and 3D Positioning Algorithm Design for mmWave Positioning System,\" IEEE Internet of Things Journal, vol. 11, no. 2, pp. 2181-2197, Jan. 15, 2024.",
  "T. Wu, C. Pan, K. Zhi, H. Ren, M. Elkashlan, J. Z. Wang, \"Employing High-Dimensional RIS Information for RIS-aided Localization Systems,\" IEEE Communications Letters, vol. 28, no. 9, pp. 2046-2050, 2024.",
  "T. Wu, C. Pan, Y. Pan, H. Ren, M. Elkashlan, C.-X. Wang, \"Fingerprint-Based mmWave Positioning System Aided by Reconfigurable Intelligent Surface,\" IEEE Wireless Communications Letters, vol. 12, no. 8, pp. 1379-1383, Aug. 2023.",
  "T. Wu, M. Jiang, Q. Zhang, Q. Li, J. Qin, \"Beamforming Design in Multiple-Input-Multiple-Output Symbiotic Radio Backscatter Systems,\" IEEE Communications Letters, vol. 25, no. 6, pp. 1949-1953, June 2021.",
  "J. Yao, L. Zhou, T. Wu*, M. Jin, C. Pan, M. Elkashlan, K.-K. Wong, \"Exploring Fairness for FAS-assisted Communication Systems: From NOMA to OMA,\" accepted by IEEE Transactions on Wireless Communications.",
  "X. Lai, J. Yao, K. Zhi, T. Wu*, D. Morales-Jimenez, K.-K. Wong, \"FAS-RIS: A Block-Correlation Model Analysis,\" IEEE Transactions on Vehicular Technology, early access, doi: 10.1109/TVT.2024.3480234.",
  "J. Yao, M. Jin, T. Wu*, M. Elkashlan, C. Yuen, K.-K. Wong, G. K. Karagiannidis, H. Shin, \"FAS-Driven Spectrum Sensing for Cognitive Radio Networks,\" IEEE Internet of Things Journal, early access, doi: 10.1109/JIOT.2024.3518623.",
  "J. Yao, T. Wu*, M. Jin, C. Pan, Q. Li, J. Yuan, \"Joint Optimization for Achieving Covertness in MIMO Over-the-Air Computation Networks,\" IEEE Transactions on Vehicular Technology, vol. 73, no. 11, pp. 17836-17841, Nov. 2024.",
  "L. Zhou, J. Yao, M. Jin, T. Wu*, K.-K. Wong, \"Fluid Antenna-Assisted ISAC Systems,\" IEEE Wireless Communications Letters, early access, doi: 10.1109/LWC.2024.3476148.",
  "J. Zheng, T. Wu*, X. Lai, C. Pan, M. Elkashlan, K.-K. Wong, \"FAS-assisted NOMA Short-Packet Communication Systems,\" IEEE Transactions on Vehicular Technology, vol. 73, no. 7, pp. 10732-10737, July 2024.",
  "X. Lai, T. Wu*, J. Yao, C. Pan, M. Elkashlan, K.-K. Wong, \"On Performance of Fluid Antenna System using Maximum Ratio Combining,\" IEEE Communications Letters, vol. 28, no. 2, pp. 402-406, Feb. 2024.",
  "J. Yao, T. Wu*, M. Jin, C. Pan, M. Elkashlan, K.-K. Wong, \"Proactive Monitoring via Jamming in Fluid Antenna Systems,\" IEEE Communications Letters, vol. 28, no. 7, pp. 1698-1702, July 2024, doi: 10.1109/LCOMM.2024.3398005.",
  "X. Lai, T. Wu*, C. Pan, L. Mai, A. Nallanathan, \"Short-Packet Edge Computing Networks With Execution Uncertainty,\" IEEE Transactions on Green Communications and Networking, early access, doi: 10.1109/TGCN.2024.3373911.",
  "M. Jiang, Y. Li, T. Wu, C. Yuen, N. Dhahir, \"Rethinking Distributed Average Consensus for Wireless Networks: A Low-Cost Approach to Broadcast Probability Optimization,\" IEEE Internet of Things Journal, early access, doi: 10.1109/JIOT.2024.3519157.",
  "Y. Zhang, H. Ren, C. Pan, B. Wang, Z. Yu, R. Weng, T. Wu, Y. He, \"Secure Wireless Communication in Active RIS-Assisted DFRC Systems,\" IEEE Transactions on Vehicular Technology, early access, doi: 10.1109/TVT.2024.3438151.",
  "C. Pan, G. Zhou, K. Zhi, S. Hong, T. Wu, Y. Pan, H. Ren, M. D. Renzo, A. Lee Swindlehurst, R. Zhang, A. Y. Zhang, \"An Overview of Signal Processing Techniques for RIS/IRS-aided Wireless Systems,\" IEEE Journal of Selected Topics in Signal Processing, vol. 16, no. 5, pp. 883-917, Aug. 2022.",
  "L. Li, T. Wu, Q. Zhang, J. Qin, \"Sum Achievable Rate Maximization in Orbital Angular Momentum-Based Amplify-and-Forward Two-Way Relay Networks,\" IEEE Communications Letters, vol. 25, no. 5, pp. 1640-1644, May 2021.",
  "X. Lai, T. Wu, Q. Zhang, J. Qin, \"Average Secure BLER Analysis of NOMA Downlink Short-Packet Communication Systems in Flat Rayleigh Fading Channels,\" IEEE Transactions on Wireless Communications, vol. 20, no. 5, pp. 2948-2960, May 2021.",
  "J. Yao, T. Wu, Q. Zhang, J. Qin, \"Proactive Monitoring via Passive Reflection Using Intelligent Reflecting Surface,\" IEEE Communications Letters, vol. 24, no. 9, pp. 1909-1913, Sept. 2020."
];

const underReview = [
  "T. Wu, C. Pan, K. Zhi, H. Ren, M. Elkashlan, C. Yuen, \"Near-Field Mobile Tracking: A Framework of Using XL-RIS Information,\" Under Review in IEEE Transactions on Wireless Communications.",
  "T. Wu, H. Ren, C. Pan, Y. Pan, S. Hong, M. Elkashlan, F. Shu, J. Z. Wang, \"RIS-Aided Localization Algorithm and Analysis: Tackling Non-Gaussian Angle Estimation Errors,\" Major Revision in IEEE Internet of Things Journal.",
  "T. Wu, L. Hou, H. Niu, S. Xu, S. G. Razul, C. Yuen, \"Exploring Dual-Sniffer Passive Localization: Algorithm Design and Experimental Results,\" Under Review in IEEE Transactions on Vehicular Technology.",
  "T. Wu, K. Zhi, J. Yao, X. Lai, J. Zheng, H. Niu, M. Elkashlan, K.-K. Wong, C. B. Chae, Z. Ding, G. K. Karagiannidis, M. Debbah, C. Yuen, \"Fluid Antenna Systems Toward 6G Systems: Principles, Applications, and Research Directions,\" Under Review in IEEE Wireless Communications.",
  "J. Yao, M. Jin, T. Wu*, C. Pan, M. Elkashlan, C. Yuen, G. K. Karagiannidis, O. A. Dobre, \"Rethinking Secure Resource Allocation: When NOMA Meets Finite Blocklength,\" Under Review in IEEE Transactions on Information Forensics and Security.",
  "J. Yao, X. Lai, K. Zhi, T. Wu*, M. Jin, C. Pan, M. Elkashlan, C. Yuen, K.-K. Wong, \"A Framework of FAS-RIS Systems: Performance Analysis and Throughput Optimization,\" Under Review in IEEE Transactions on Wireless Communications.",
  "J. Yao, J. Zheng, T. Wu*, M. Jin, C. Yuen, K.-K. Wong, F. Adachi, \"FAS-RIS Communication: Model, Analysis, and Optimization,\" Major Revision in IEEE Transactions on Vehicular Technology.",
  "J. Yao, L. Zhou, T. Wu*, M. Jin, C. Huang, C. Yuen, \"FAS vs. ARIS: Which Is More Important for FAS-ARIS Communication Systems?,\" Under Review in IEEE Transactions on Wireless Communications.",
  "J. Zheng, X. Lai, T. Wu*, M. Elkashlan, D. B. d. Costa, C. Yuen, F. Adachi, \"Unlocking FAS-RIS Communication Security Analysis with Block-Correlation Model,\" Major Revision in IEEE Wireless Communications Letters.",
  "L. Mai, T. Wu, J. Yao, J. Tang, C. Yuen, K.-K. Wong, F. Adachi, \"A Secure Beamforming Design: When Fluid Antenna Meets NOMA,\" Under Review in IEEE Internet of Things Journal.",
  "J. Zheng, X. Lai, J. Yao, J. Tang, Y. Pan, T. Wu*, C. Yuen, \"Paving the Way to 6G: Outage Probability Analysis for FAS-ARIS Systems,\" Under Review in IEEE Internet of Things Journal.",
  "J. Zheng, T. Wu*, J. Yao, C. Yuen, Z. Ding, F. Adachi, \"Exploring the Impact of RIS on Cooperative NOMA URLLC Systems: A Theoretical Perspective,\" Under Review in IEEE Transactions on Wireless Communications.",
  "Y. Li, M. Jiang, T. Wu*, C. Yuen, K.-K. Wong, F. Adachi, \"Joint Transmit Beamforming and Antenna Position Optimization for Fluid-Antenna-Assisted Dual-Functional Radar-Communication Systems,\" Under Review in IEEE Transactions on Vehicular Technology.",
  "J. Yao, L. Xin, T. Wu, M. Jin, K.-K. Wong, C. Yuen, H. Shin, \"FAS for Secure and Covert Communications,\" Under Review in IEEE Internet of Things Journal.",
  "J. Yao, T. Wu*, L. Zhou, M. Jin, C. Yuen, \"Rethinking Hardware Impairments in Multi-User Systems: Can FAS Make a Difference?,\" Under Review in IEEE Transactions on Wireless Communications.",
  "Y. Tian, H. Zhao, T. Wu*, W. Liu, M. Elkashlan, C. Yuen, H. Wymeersch, F. Adachi, G. K. Karagiannidis, \"Efficient DOA Estimation in Hybrid Analog-Digital Structures: Mitigating the Impact of Mutual Coupling,\" Under Review in IEEE Transactions on Vehicular Technology.",
  "S. Yang, J. Yao, J. Tang, T. Wu*, M. Elkashlan, C. Yuen, M. Debbah, H. Shin, M.C. Valenti, \"Towards Intelligent Antenna Positioning: Leveraging DRL for FAS-Aided ISAC Systems,\" Under Review in IEEE Internet of Things Journal."
];

const conferences = [
  "T. Wu, \"Reinforcement Learning Based Proactive Monitor Channel Allocation,\" accepted by IEEE Advanced Information Technology, Electronic and Automation Control Conference (IAEAC), 2021.",
  "L. Li and T. Wu, \"Performance Analysis of Downlink MIMO NOMA Vehicular Networks,\" 2020 IEEE International Conference on Information Technology, Big Data and Artificial Intelligence (ICIBA), Chongqing, China, 2020, pp. 1483-1486, doi: 10.1109/ICIBA50161.2020.9277153.",
  "K. Zhi, C. Pan, T. Wu, H. Ren, and K. K. Chai, \"Analysis of XL-Array with Near-Field EM Channels,\" accepted by European Signal Processing Conference, (EUSIPCO), 2023. (Invited paper)",
  "X. Lai, K. Zhi, W. Li, T. Wu, and M. Elkashlan, \"FAS-assisted Wireless Powered Communication Systems,\" accepted by 2024 IEEE International Conference on Communications Workshops.",
  "Y. Zhang, H. Ren, C. Pan, B. Wang, Z. Yu, R. Weng, and T. Wu, \"Secure Wireless Communication in Active RIS-Assisted MISO DFRC System,\" accepted by 2024 IEEE International Workshop on Radio Frequency and Antenna Technologies (iWRFAT)."
]; 