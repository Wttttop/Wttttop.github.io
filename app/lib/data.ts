// News item interface
export interface NewsItem {
  title: string;
  date: string;
  content: string;
}

// News data (in a real application, this could come from a CMS or API)
export const newsItems: NewsItem[] = [
{
    title: "Appointed as Editor for IEEE Transactions on Communications",
    date: "January 2025",
    content: "Honored to join the editorial board of IEEE Transactions on Communications. In this role, I will be handling manuscripts in the areas of wireless communications, signal processing, and emerging technologies such as RIS and FAS."
},
  {
    title: "New Publication in IEEE Journal on Selected Areas in Communications",
    date: "June 2024",
    content: "Our paper \"Exploit High-Dimensional RIS Information to Localization\" has been accepted for publication in IEEE Journal on Selected Areas in Communications. This work explores the impact of faulty elements in reconfigurable intelligent surfaces for localization applications."
  },
  {
    title: "Joined Nanyang Technological University as Research Fellow",
    date: "June 2024",
    content: "I have started a new position as Research Fellow at the School of Electrical and Electronic Engineering, Nanyang Technological University (NTU). I will be working on advanced wireless communications technologies and continuing my research on fluid antenna systems and RIS."
  },
  {
    title: "Invited Talk at IEEE International Conference on Communications",
    date: "May 2024",
    content: "Presented our recent work on \"FAS-assisted Wireless Communications\" at ICC 2024, discussing the latest advancements in fluid antenna systems and their applications in next-generation wireless networks."
  },
  {
    title: "Paper accepted in IEEE Internet of Things Journal",
    date: "January 2024",
    content: "Our paper \"Joint Angle Estimation Error Analysis and 3D Positioning Algorithm Design for mmWave Positioning System\" has been accepted for publication in IEEE Internet of Things Journal."
  },
  {
    title: "New collaborative project on ISAC systems",
    date: "December 2023",
    content: "Started a new collaborative project on Integrated Sensing and Communications (ISAC) systems, focusing on fluid-antenna-assisted dual-functional radar-communication systems for next-generation applications."
  },
  {
    title: "Paper accepted in IEEE Wireless Communications Letters",
    date: "August 2023",
    content: "Our paper \"Fingerprint-Based mmWave Positioning System Aided by Reconfigurable Intelligent Surface\" has been accepted for publication in IEEE Wireless Communications Letters."
  },
  {
    title: "Invited paper at EUSIPCO 2023",
    date: "July 2023",
    content: "Our work \"Analysis of XL-Array with Near-Field EM Channels\" has been accepted as an invited paper at the 2023 European Signal Processing Conference (EUSIPCO)."
  }
]; 