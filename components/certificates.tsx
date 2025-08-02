"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  Eye,
  Building,
  GraduationCap,
  Code,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "MSIB Independent Study - E-Commerce Web Programming",
    issuer: "Kampus Merdeka - Universitas Mulawarman",
    date: "December 2024",
    category: "Program",
    description:
      "Comprehensive independent study program in e-commerce web programming with final score of 82.98. Completed various modules including web development, database management, and e-commerce implementation.",
    image: "/placeholder.svg?height=300&width=400&text=MSIB+Certificate",
    skills: ["Laravel", "PHP", "E-Commerce", "Web Development", "Database"],
    credentialId: "No.AMS/B-418/Sert/XII/2024",
    verificationUrl: "#",
    downloadUrl: "/certificates/msib-certificate.pdf",
    type: "Program",
    icon: GraduationCap,
    score: "82.98",
    details: {
      studentId: "2209116052",
      faculty: "Fakultas Teknik - Sistem Informasi",
      supervisor: "Fauziah, SE., MM",
      scores: {
        "Module 1": "80.80",
        "Module 2": "71.00",
        "Module 3": "85.72",
        "Module 4": "91.60",
        "Module 5": "83.50",
        "Module 6": "83.55",
        "Module 7": "92.00",
        Final: "82.98",
      },
    },
  },
  {
    id: 2,
    title: "Web Development Professional Certification",
    issuer: "BNSP - Lembaga Sertifikasi Teknologi Digital",
    date: "February 2025",
    category: "Professional",
    description:
      "Professional certification in Web Development with qualification as 'Pengembang Web Pratama'. Covers comprehensive web development competencies including UI implementation, programming languages, and best practices.",
    image: "/placeholder.svg?height=300&width=400&text=BNSP+Web+Development",
    skills: [
      "Web Development",
      "UI Implementation",
      "Programming",
      "Best Practices",
      "Code Organization",
    ],
    credentialId: "No. 62090 2513 3 0128503 2025",
    verificationUrl: "#",
    downloadUrl: "/certificates/web-development-bnsp.pdf",
    type: "Professional",
    icon: Award,
    validity: "3 Years",
    details: {
      registrationNo: "TIK 1565 13192 2025",
      qualification: "Pengembang Web Pratama",
      director: "Ir. Gunawan Ramli, M.Kom",
      competencyUnits: [
        "J.620100.005.02 - Mengimplementasikan User Interface",
        "J.620100.010.01 - Menerapkan perintah eksekusi bahasa pemrograman",
        "J.620100.015.01 - Menyusun fungsi, file atau sumber daya pemrograman",
        "J.620100.016.01 - Menulis kode dengan prinsip guidelines dan best practices",
        "J.620100.017.02 - Mengimplementasikan pemrograman terstruktur",
        "J.620100.019.02 - Menggunakan library atau komponen pre-existing",
      ],
    },
  },
  {
    id: 3,
    title: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    date: "May 2025",
    category: "AI/ML",
    description:
      "Advanced course on code generation and optimization using IBM Granite models. Learned cutting-edge techniques for automated code generation and optimization strategies.",
    image: "/placeholder.svg?height=300&width=400&text=IBM+Granite+Code",
    skills: [
      "IBM Granite",
      "Code Generation",
      "AI",
      "Optimization",
      "Machine Learning",
    ],
    credentialId: "MDL-566",
    verificationUrl: "https://skills.yourlearning.ibm.com/certificate/MDL-566",
    downloadUrl: "/certificates/ibm-granite-code-generation.pdf",
    type: "Course",
    icon: Code,
    duration: "3 hrs 30 mins",
    details: {
      completionDate: "22 May 2025 (GMT)",
      platform: "IBM SkillsBuild Moodle",
      learningHours: "3 hrs 30 mins",
    },
  },
  {
    id: 4,
    title: "Use Generative AI for Software Development",
    issuer: "IBM SkillsBuild",
    date: "May 2025",
    category: "AI/ML",
    description:
      "Comprehensive training on using generative AI technologies for software development. Covers practical applications of AI in coding, debugging, and software architecture.",
    image: "/placeholder.svg?height=300&width=400&text=IBM+Generative+AI",
    skills: [
      "Generative AI",
      "Software Development",
      "AI Tools",
      "Automation",
      "IBM Watson",
    ],
    credentialId: "MDL-504",
    verificationUrl: "https://skills.yourlearning.ibm.com/certificate/MDL-504",
    downloadUrl: "/certificates/ibm-generative-ai-software.pdf",
    type: "Course",
    icon: Code,
    duration: "1 hr",
    details: {
      completionDate: "20 May 2025 (GMT)",
      platform: "IBM SkillsBuild Moodle",
      learningHours: "1 hr",
    },
  },
  {
    id: 5,
    title: "IBM Granite Models for Software Development",
    issuer: "IBM SkillsBuild",
    date: "May 2025",
    category: "AI/ML",
    description:
      "Specialized training on IBM Granite models specifically for software development applications. Deep dive into model architecture and practical implementation strategies.",
    image: "/placeholder.svg?height=300&width=400&text=IBM+Granite+Models",
    skills: [
      "IBM Granite",
      "AI Models",
      "Software Development",
      "Model Architecture",
      "Implementation",
    ],
    credentialId: "MDL-567",
    verificationUrl: "https://skills.yourlearning.ibm.com/certificate/MDL-567",
    downloadUrl: "/certificates/ibm-granite-models.pdf",
    type: "Course",
    icon: Code,
    duration: "1 hr 30 mins",
    details: {
      completionDate: "20 May 2025 (GMT)",
      platform: "IBM SkillsBuild Moodle",
      learningHours: "1 hr 30 mins",
    },
  },
  {
    id: 6,
    title: "Internship Completion Certificate",
    issuer: "PT. Rivolta Solusi Teknologi",
    date: "July 2025",
    category: "Experience",
    description:
      "Successfully completed 6-month internship as Full Stack Developer at Rivolta Solusi Teknologi. Demonstrated outstanding dedication, contribution, and commitment in various development projects.",
    image: "/placeholder.svg?height=300&width=400&text=Rivolta+Internship",
    skills: [
      "Full Stack Development",
      "Project Management",
      "Team Collaboration",
      "Professional Skills",
    ],
    credentialId: "003/WEC/RST/VII/2025",
    verificationUrl: "#",
    downloadUrl: "/certificates/rivolta-internship.pdf",
    type: "Experience",
    icon: Briefcase,
    duration: "6 Months",
    details: {
      period: "February 2025 - July 2025",
      position: "Full Stack Developer Intern",
      projectManager: "Daffa Mafazi",
      achievements: "Outstanding dedication, contribution, and commitment",
    },
  },
];

const categories = ["All", "Program", "Professional", "AI/ML", "Experience"];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);

  const filteredCertificates = certificates.filter(
    (cert) => selectedCategory === "All" || cert.category === selectedCategory
  );

  const handleDownload = (downloadUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 80,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text ">
            Certificates & Achievements
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
          />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my
            expertise and commitment to continuous learning
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  : "bg-slate-900/50 text-slate-300 border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 h-full hover:border-slate-600/50 transition-all duration-500 overflow-hidden shadow-xl">
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Certificate Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 backdrop-blur-sm">
                      <certificate.icon className="w-3 h-3 mr-1" />
                      {certificate.type}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-slate-900/80 border-slate-700/50 text-white hover:bg-slate-800/80 backdrop-blur-sm"
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-slate-900/80 border-slate-700/50 text-white hover:bg-slate-800/80 backdrop-blur-sm"
                      onClick={() =>
                        handleDownload(
                          certificate.downloadUrl,
                          certificate.title
                        )
                      }
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Title and Issuer */}
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2 line-clamp-2 group-hover:text-yellow-100 transition-colors">
                        {certificate.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Building className="w-4 h-4" />
                        <span>{certificate.issuer}</span>
                      </div>
                    </div>

                    {/* Date and Additional Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{certificate.date}</span>
                      </div>
                      {certificate.score && (
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <Award className="w-4 h-4" />
                          <span>Score: {certificate.score}</span>
                        </div>
                      )}
                      {certificate.duration && (
                        <div className="flex items-center gap-2 text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>Duration: {certificate.duration}</span>
                        </div>
                      )}
                      {certificate.validity && (
                        <div className="flex items-center gap-2 text-purple-400 text-sm">
                          <Award className="w-4 h-4" />
                          <span>Valid for: {certificate.validity}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {certificate.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 border border-slate-700/50 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {certificate.skills.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-400 border border-slate-700/50 text-xs"
                        >
                          +{certificate.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800/50 flex-1 bg-transparent"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                        onClick={() =>
                          handleDownload(
                            certificate.downloadUrl,
                            certificate.title
                          )
                        }
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-slate-900/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl px-8 py-4">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-2xl font-bold text-purple-400"
              >
                {certificates.length}
              </motion.div>
              <div className="text-xs text-slate-400">Certificates</div>
            </div>
            <div className="w-px h-8 bg-slate-700/50" />
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-2xl font-bold text-emerald-400"
              >
                {categories.length - 1}
              </motion.div>
              <div className="text-xs text-slate-400">Categories</div>
            </div>
            <div className="w-px h-8 bg-slate-700/50" />
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-2xl font-bold text-blue-400"
              >
                3+
              </motion.div>
              <div className="text-xs text-slate-400">Years Learning</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal/Preview */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-slate-400">{selectedCertificate.issuer}</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Credential ID: {selectedCertificate.credentialId}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCertificate(null)}
                  className="border-slate-600 text-slate-300"
                >
                  ✕
                </Button>
              </div>

              <Image
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                width={800}
                height={600}
                className="w-full rounded-xl"
                crossOrigin="anonymous"
              />

              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Date:</span>
                    <span className="text-white ml-2">
                      {selectedCertificate.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Type:</span>
                    <span className="text-white ml-2">
                      {selectedCertificate.type}
                    </span>
                  </div>
                  {selectedCertificate.score && (
                    <div>
                      <span className="text-slate-400">Score:</span>
                      <span className="text-green-400 ml-2 font-medium">
                        {selectedCertificate.score}
                      </span>
                    </div>
                  )}
                  {selectedCertificate.duration && (
                    <div>
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-blue-400 ml-2">
                        {selectedCertificate.duration}
                      </span>
                    </div>
                  )}
                  {selectedCertificate.validity && (
                    <div>
                      <span className="text-slate-400">Validity:</span>
                      <span className="text-purple-400 ml-2">
                        {selectedCertificate.validity}
                      </span>
                    </div>
                  )}
                </div>

                {/* Additional Details */}
                {selectedCertificate.details && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-white">
                      Additional Details
                    </h4>
                    <div className="bg-slate-800/50 rounded-xl p-4 space-y-2">
                      {Object.entries(selectedCertificate.details).map(
                        ([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="text-slate-400 capitalize">
                              {key.replace(/([A-Z])/g, " $1")}:
                            </span>
                            {Array.isArray(value) ? (
                              <ul className="ml-4 mt-1 space-y-1">
                                {value.map((item, index) => (
                                  <li key={index} className="text-slate-300">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            ) : typeof value === "object" ? (
                              <div className="ml-4 mt-1 space-y-1">
                                {Object.entries(value).map(
                                  ([subKey, subValue]) => (
                                    <div
                                      key={subKey}
                                      className="text-slate-300"
                                    >
                                      <span className="text-slate-400">
                                        {subKey}:
                                      </span>{" "}
                                      {String(subValue)}
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <span className="text-white ml-2">{value}</span>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <span className="text-slate-400 text-sm">Skills:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedCertificate.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                    onClick={() =>
                      handleDownload(
                        selectedCertificate.downloadUrl,
                        selectedCertificate.title
                      )
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>

                  {selectedCertificate.verificationUrl !== "#" && (
                    <Button
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800/50 flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={selectedCertificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Online
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
