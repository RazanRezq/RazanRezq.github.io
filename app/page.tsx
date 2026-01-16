"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { PinContainer } from "@/components/ui/3d-pin";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { MagicButton } from "@/components/ui/magic-button";
import { PROFILE, NAV_ITEMS, PROJECTS, GRID_ITEMS } from "@/lib/constants";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function Home() {
  // Scroll to top on initial load if there's a hash in the URL
  useEffect(() => {
    // Only scroll to top if we're not already at the top
    if (window.location.hash && window.scrollY === 0) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Remove hash from URL without triggering scroll
        window.history.replaceState(null, "", window.location.pathname);
      }, 100);
    }
  }, []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000319]">
      {/* Floating Dock Navigation */}
      <FloatingDock items={NAV_ITEMS} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-screen overflow-hidden"
      >
        {/* Full-width Background Elements - Outside content container */}
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-screen h-full pointer-events-none overflow-hidden">
          {/* Grid Background - Full screen coverage */}
          <div className="absolute inset-0 w-full h-full grid-pattern pointer-events-none" />

          {/* Spotlight Effect - Full screen */}
          <div className="absolute inset-0 w-full h-full">
            <Spotlight className="w-full h-full bg-transparent" fill="violet" />
          </div>
        </div>

        {/* Content Container - Centered with max-width */}
        <div className="relative z-10 w-full max-w-7xl mx-auto min-h-screen flex items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center text-center w-full">
            {/* Glowing orb background effect */}
            <div className="absolute -z-10 h-125 w-125 rounded-full bg-violet-600/20 blur-[120px]" />

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6"
            >
              <div className="relative h-32 w-32 md:h-40 md:w-40">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 p-[3px] animate-spin-slow">
                  <div className="h-full w-full rounded-full bg-[#000319]" />
                </div>
                {/* Image */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden border-4 border-[#000319]">
                  <Image
                    src="/myImage.jpeg"
                    alt="Razan Nasrallah"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              {PROFILE.role}
            </motion.div>

            <EncryptedText text={PROFILE.name} />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl"
            >
              {PROFILE.slogan}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="mt-10 flex gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              >
                View My Work
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-2"
          >
            <motion.div className="h-2 w-1 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Section - Dense content layout */}
      <section
        id="about"
        className="relative w-full py-20 overflow-hidden bg-[#000319]"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 h-full w-full grid-pattern pointer-events-none opacity-30" />

        {/* Animated background orbs */}
        <div className="absolute top-20 left-20 h-72 w-72 bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 h-72 w-72 bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 mb-6"
            >
              <span className="text-2xl">👋</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                About Me
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-3xl font-bold md:text-5xl lg:text-6xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-white">
                {PROFILE.about}
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center justify-center gap-4 flex-wrap"
            >
              {["Full Stack", "AI/ML", "SaaS", "Problem Solver"].map(
                (badge, idx) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                  >
                    {badge}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          <BentoGrid className="w-full py-10">
            {GRID_ITEMS.map((item) => (
              <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative w-full min-h-screen py-20 overflow-hidden"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 h-full w-full grid-pattern pointer-events-none opacity-30" />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 mb-6"
            >
              <span className="text-2xl">💼</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                Featured Work
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-3xl font-bold md:text-5xl lg:text-6xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-white">
                A Selection of Recent Projects
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-neutral-400 max-w-2xl mx-auto"
            >
              Transforming ideas into intelligent solutions with cutting-edge
              technology
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-16">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-112 w-full flex items-center justify-center sm:w-lg"
              >
                <PinContainer title="Visit Jadara" href={project.link}>
                  <div className="flex h-96 w-[20rem] flex-col p-4 tracking-tight text-slate-100/50 sm:w-[24rem]">
                    {/* Project Preview */}
                    <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-white/80">
                            {project.title}
                          </div>
                          <div className="mt-2 text-xs text-white/40">
                            AI Recruitment Platform
                          </div>
                        </div>
                      </div>
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 rounded-xl border border-white/10" />
                    </div>

                    <h3 className="max-w-xs text-lg font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {project.des}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.iconLists.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-violet-300 border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex items-center gap-4 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-violet-400 transition-colors hover:text-violet-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="relative w-full py-20 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 right-20 h-72 w-72 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-20 h-72 w-72 bg-violet-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 mb-6"
            >
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                My Approach
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-3xl font-bold md:text-5xl lg:text-6xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-white">
                How I Build Solutions
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-neutral-400 max-w-2xl mx-auto"
            >
              A proven methodology that ensures quality, efficiency, and success
              in every project
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Planning",
                description:
                  "Understanding your needs, defining requirements, and creating a roadmap for success.",
                icon: "🎯",
              },
              {
                phase: "Phase 2",
                title: "Development & Testing",
                description:
                  "Building with best practices, constant iteration, and rigorous testing to ensure quality.",
                icon: "⚡",
              },
              {
                phase: "Phase 3",
                title: "Launch & Support",
                description:
                  "Deployment, monitoring, and ongoing support to keep your solution running smoothly.",
                icon: "🚀",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative group"
              >
                <div className="h-full rounded-2xl border border-white/8 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
                    {item.phase}
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <MagicButton
              title="Let's get started"
              icon={<Sparkles className="h-5 w-5" />}
              position="right"
              handleClick={() =>
                (window.location.href = `mailto:${PROFILE.email}`)
              }
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-neutral-500"
          >
            © {new Date().getFullYear()} {PROFILE.name}. Crafted with passion &
            code.
          </motion.p>
        </div>
      </footer>
    </main>
  );
}
