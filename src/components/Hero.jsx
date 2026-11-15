import React, { useState } from 'react';
import { ArrowRight, Code2, ShieldCheck, Cpu, Database, CheckCircle2, Copy, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function Hero({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('spring');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    spring: {
      filename: "OrderServiceController.java",
      lang: "java",
      code: `@RestController
@RequestMapping("/api/v1/orders")
@Tag(name = "Order Microservice", description = "High-throughput order processing")
public class OrderServiceController {

    private final OrderProcessingEngine orderEngine;
    private final RateLimiterService rateLimiter;

    @PostMapping(path = "/dispatch", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('SCOPE_order:write')")
    public ResponseEntity<OrderReceiptDTO> dispatchOrder(
            @Valid @RequestBody OrderRequestDTO request,
            @AuthenticationPrincipal Jwt jwtUser) {
        
        // Enforce zero-trust rate limiting per tenant
        rateLimiter.checkLimit(jwtUser.getSubject(), 200);

        OrderReceiptDTO receipt = orderEngine.processTransaction(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(receipt);
    }
}`
    },
    security: {
      filename: "SecurityConfig.java",
      lang: "java",
      code: `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class EnterpriseSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .cors(Customizer.withDefaults())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/public/**", "/actuator/health").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth -> oauth.jwt(Customizer.withDefaults()))
            .addFilterBefore(new AES256DecryptionFilter(), UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`
    },
    react: {
      filename: "useRealtimeStream.ts",
      lang: "typescript",
      code: `import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

export function useRealtimeStream(topic: string, authToken: string) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: 'wss://api.agency.internal/ws',
      connectHeaders: { Authorization: \`Bearer \${authToken}\` },
      onConnect: () => {
        stompClient.subscribe(\`/topic/\${topic}\`, (message) => {
          setMessages(prev => [...prev, JSON.parse(message.body)]);
        });
      }
    });

    stompClient.activate();
    return () => { stompClient.deactivate(); };
  }, [topic, authToken]);

  return { messages };
}`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glows and Grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Java Spring Boot &bull; React &bull; AWS Cloud &bull; Security
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Engineering High-Scale <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Software, Web & APIs
              </span>
              <br />
              Built for 99.99% Uptime.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We architect and develop mission-critical backends, high-throughput RESTful microservices, and slick React applications for ambitious startups and modern enterprises.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 rounded-xl hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl hover:border-slate-600 transition-all duration-200"
              >
                <span>Instant Project Quote</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">100% IP & Code Ownership</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Senior Architect Direct</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Enterprise Security (AES/JWT)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Code & Architecture Showcase Window */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-[1px] shadow-2xl shadow-cyan-950/40 border border-slate-700/60 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F19]/90 rounded-t-2xl border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    production-architecture.spec
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-slate-200 transition p-1 rounded hover:bg-slate-800"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Tabs */}
              <div className="flex items-center gap-1 px-3 pt-2 bg-[#0E1524] border-b border-slate-800/60 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('spring')}
                  className={`px-3 py-1.5 rounded-t-md transition-all ${
                    activeTab === 'spring'
                      ? 'bg-[#080B11] text-cyan-400 border-t border-l border-r border-slate-800 font-semibold'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  OrderController.java
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`px-3 py-1.5 rounded-t-md transition-all ${
                    activeTab === 'security'
                      ? 'bg-[#080B11] text-cyan-400 border-t border-l border-r border-slate-800 font-semibold'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  SecurityConfig.java
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  className={`px-3 py-1.5 rounded-t-md transition-all ${
                    activeTab === 'react'
                      ? 'bg-[#080B11] text-cyan-400 border-t border-l border-r border-slate-800 font-semibold'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  useRealtimeStream.ts
                </button>
              </div>

              {/* Code Snippet Area */}
              <div className="p-4 bg-[#080B11] rounded-b-2xl font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed max-h-[360px]">
                <pre>
                  <code>{codeSnippets[activeTab].code}</code>
                </pre>
              </div>

              {/* Footer Live Badge */}
              <div className="p-3 bg-[#0B0F19]/90 border-t border-slate-800/80 rounded-b-2xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Spring Boot 3.5 &bull; Java 21 LTS &bull; AWS Ready</span>
                </div>
                <span className="text-slate-500 font-mono">Status: PASS</span>
              </div>

            </div>
          </div>

        </div>

        {/* Global Statistics Counter Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {agencyInfo.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
