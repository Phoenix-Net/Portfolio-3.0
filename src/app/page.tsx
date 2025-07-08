'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaServer, FaStream, FaPollH, FaDesktop, FaNetworkWired, FaShieldAlt, FaCloud, FaFilter, FaLaptopHouse, FaDatabase, FaBalanceScale, FaExchangeAlt, FaWifi, FaEnvelope } from 'react-icons/fa';
import { TiltCard } from '@/components/TiltCard';
import { ImageModal } from '@/components/ImageModal';
import Image from 'next/image';
import { FaBox, FaHardDrive } from 'react-icons/fa6';
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] text-white py-12">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 flex items-center justify-center text-white text-4xl font-bold transition-all duration-300 hover:scale-110 hover:rotate-[8deg] cursor-pointer relative">
              <Image
                src="/images/pnet-logo.png"
                alt="PhoenixNet-Labs Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">PhoenixNet-Labs</h1>
              <p className="text-xl text-gray-200">A compliation of projects, accomplishments, and experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">A Little About Me</h2>
          
          {/* Two Paragraph Sections */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who, or rather, what is PhoenixNet-Labs?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                PhoenixNet-Labs is a "pseudo-company" that I use to host my projects, 
                as well as to showcase my skills and knowledge to future employers.
                <br/><br/>
                I created PhoenixNet-Labs in highschool to put a brand on my projects, akin to how Microsoft uses "Contoso" for their examples.
                <br/><br/>
                PhoenixNet-Labs is not a real company, and is not affiliated with any real company. I use this brand to "encompass" all of my projects and practices, and to give them a cohesive brand.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Well, then who are you?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm an IT Specialist, and have been in the IT field for about 4 years now. I've encountered many different technologies during my time.
                <br/><br/>
                I use my lab to learn new technologies, mirror my employer's environments, and to keep my skills sharp.
                <br/><br/>
                Below are some of the projects that I've worked on, and a list of my skills, take a look around!
              </p>
            </div>
          </div>

          {/* Featured Technologies Grid */}
          <h2 className="text-3xl font-bold mb-12">Featured Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/infrastructure.png", alt: "Homelab Infrastructure" })}>
                <Image
                  src="/images/infrastructure.png"
                  alt="Homelab Infrastructure"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Proxmox
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    VMware ESXi
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Virtualization
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Homelab Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive homelab setup featuring virtualization, centralized storage, and various self-hosted services.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/networking.png", alt: "Network Infrastructure" })}>
                <Image
                  src="/images/networking.png"
                  alt="Network Infrastructure"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    OPNsense
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    VLANs
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Networking
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Networking</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Enterprise-grade network infrastructure with OPNsense firewall, VLAN segmentation, and VPN technologies.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/cucm.jpg", alt: "Telecommunications Systems" })}>
                <Image
                  src="/images/cucm.jpg"
                  alt="Telecommunications Systems"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    CUCM
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Unity
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    IM & Presence
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Telecommunications</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A communications system using Cisco CUCM, Cisco Unity, and UC Phones.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/unifi.png", alt: "Ubiquiti Wireless" })}>
                <Image
                  src="/images/unifi.png"
                  alt="Ubiquiti Wireless"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Ubiquiti Networks
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    UniFi
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Wireless Networking</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Wireless networking using Ubiquiti APs, and UniFi Controller.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/truenas.png", alt: "Centralized Storage" })}>
                <Image
                  src="/images/truenas.png"
                  alt="Centralized Storage"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    TrueNAS Scale
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    NextCloud
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    NFS
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Centralized Storage</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Centralized storage using TrueNAS Scale, NextCloud for file sharing, and NFS VMHost Storage.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/pterodactyl.png", alt: "Game Server Administration" })}>
                <Image
                  src="/images/pterodactyl.png"
                  alt="Game Server Administration"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Pterodactyl
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Game Servers
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Game Server Administration</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Game server administration using Pterodactyl, and a variety of game servers.
                </p>
              </div>
            </TiltCard>

          </div>

          {/* Cloud Services Grid */}
          <h2 className="text-3xl font-bold mb-12">Cloud Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/kuma.png", alt: "Uptime Kuma" })}>
                <Image
                  src="/images/kuma.png"
                  alt="Uptime Kuma"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Monitoring
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Alerts
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Uptime Kuma</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Real-time monitoring and alerting using Uptime Kuma.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/duo.png", alt: "Cisco DUO" })}>
                <Image
                  src="/images/duo.png"
                  alt="Cisco DUO"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    MFA
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Security
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cisco DUO</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Multi-factor authentication using Cisco DUO via push notifications and hardware tokens.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/backblaze_dc.jpg", alt: "Backblaze B2" })}>
                <Image
                  src="/images/backblaze_dc.jpg"
                  alt="Backblaze B2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    S3-like Storage
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Cloud Backups
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Backblaze B2</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  S3-based storage for cloud replication of network drives and VM backups.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/entra.png", alt: "Microsoft Entra ID" })}>
                <Image
                  src="/images/entra.png"
                  alt="Microsoft Entra ID"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Entra ID
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    SSO
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Microsoft Entra ID</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  SSO Identity and access management using Microsoft Entra ID.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/tailscale.svg", alt: "Tailscale" })}>
                <Image
                  src="/images/tailscale.svg"
                  alt="Tailscale"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    SDN
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    VPN
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Wireguard
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailscale</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Wireguard-based site-to-site connectivity, as well as client-VPN remote access.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: "/images/baremetal.jpg", alt: "Cloud Hosting" })}>
                <Image
                  src="/images/baremetal.jpg"
                  alt="Cloud Hosting"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    Baremetal Hosting
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                    NOCIX
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Hosting</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Baremetal hosting using NOCIX, with a focus on reliability and internet connectivity.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Skills Grid */}
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { 
                icon: <FaServer className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />,
                title: 'Dell EMC', 
                description: 'Experience with Dell PowerEdge servers.'
              },
              { 
                icon: <FaServer className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'HP Enterprise', 
                description: 'Experience with HPE ProLiant servers.'
              },
              { 
                icon: <FaServer className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />,
                title: 'Supermicro', 
                description: 'Experience with Supermicro servers.'
              },
              { 
                icon: <FaNetworkWired className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />,
                title: 'Cisco Networking', 
                description: 'Experience with Cisco networking products.'
              },
              { 
                icon: <FaDatabase className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />,
                title: 'Synology DiskStation Manager', 
                description: 'Experience with Synology DiskStation Manager.'
              },
              { 
                icon: <FaStream className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'VMware', 
                description: 'Experience with VMware vSphere, vCenter, and ESXi virtualization technologies.'
              },
              { 
                icon: <FaStream className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'Proxmox VE', 
                description: 'Experience with Proxmox VE virtualization, clustering, and LXC containers.'
              },
              { 
                icon: <FaPollH className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'Linux', 
                description: 'Strong knowledge of Linux systems, shell scripting, and system administration.'
              },
              { 
                icon: <FaDesktop className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'Windows / Windows Server', 
                description: 'Experienced in Windows and Windows Server administration.'
              },
              { 
                icon: <FaFilter className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'PiHole DNS Filtering', 
                description: 'Experience with PiHole DNS filtering and ad blocking.'
              },
              { 
                icon: <FaBox className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'Docker', 
                description: 'Experience with Docker containers and orchestration.'
              },
              { 
                icon: <FaLaptopHouse className="w-12 h-12 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'Remote Access', 
                description: 'Experience with remote desktop technologies like Apache Guacamole, Citrix, and Horizon.'
              },
              { 
                icon: <FaShieldAlt className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'Cybersecurity', 
                description: 'Knowledge and implementation of cybersecurity best practices.'
              },
              { 
                icon: <FaBalanceScale className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'HAProxy', 
                description: 'Experience with HAProxy load balancing and reverse proxying.'
              },
              { 
                icon: <FaExchangeAlt className="w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />, 
                title: 'NGINX', 
                description: 'Experience with NGINX as a web server and reverse proxy.'
              },
            ].map((skill) => (
              <TiltCard key={skill.title} className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                {typeof skill.icon === 'string' ? (
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]">
                    {skill.icon}
                  </span>
                ) : (
                  skill.icon
                )}
                <div>
                  <h3 className="font-semibold text-header dark:text-white">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer-light dark:bg-footer-dark text-white py-8">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center text-white text-sm relative transition-all duration-300 hover:scale-110 hover:rotate-[8deg] cursor-pointer">
              <Image
                src="/images/pnet-logo.png"
                alt="PhoenixNet-Labs Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold">PhoenixNet-Labs</p>
              <p className="text-sm">2017-2025</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Phoenix-Net" className="text-white hover:text-white/80">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://status.phoenixnet.tech" className="text-white hover:text-white/80">
              <FaWifi className="w-6 h-6" />
            </a>
            <a href="mailto:phoenix@phoenixnet-labs.com" className="text-white hover:text-white/80">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
} 
