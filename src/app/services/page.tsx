'use client'

import { useState } from 'react'
import Link from 'next/link'
import { servicesData } from '@/data'

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = servicesData.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.short.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const windowServices = filteredServices.filter(s => s.category === 'Windows')
  const doorServices = filteredServices.filter(s => s.category === 'Doors')

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Window & Door Services</h1>
          <p>Professional installation of premium windows and doors in Arlington, TX</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="services-search">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-button"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <p className="results-count">
            Showing {filteredServices.length} of {servicesData.length} services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          {filteredServices.length > 0 ? (
            <>
              {/* Window Services */}
              {windowServices.length > 0 && (
                <div className="service-category">
                  <h2>Window Services</h2>
                  <div className="services-grid">
                    {windowServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.route}
                        className="service-card"
                      >
                        <h3>{service.name}</h3>
                        <p>{service.short}</p>
                        <span className="learn-more">Learn More →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Door Services */}
              {doorServices.length > 0 && (
                <div className="service-category">
                  <h2>Door Services</h2>
                  <div className="services-grid">
                    {doorServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.route}
                        className="service-card"
                      >
                        <h3>{service.name}</h3>
                        <p>{service.short}</p>
                        <span className="learn-more">Learn More →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <h2>No services found for &quot;{searchQuery}&quot;</h2>
              <p>We can still help with your project in Arlington, TX</p>
              <Link href="/contact" className="cta-button">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .services-page {
          min-height: 100vh;
          padding-top: 80px;
        }

        .services-hero {
          background: linear-gradient(135deg, #0066cc 0%, #004999 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .services-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .services-hero p {
          font-size: 1.25rem;
          opacity: 0.95;
        }

        .services-search {
          padding: 3rem 0;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .search-box {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-input {
          width: 100%;
          padding: 1rem 3rem 1rem 1.5rem;
          font-size: 1.125rem;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #0066cc;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
        }

        .clear-button {
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #6c757d;
          cursor: pointer;
          padding: 0.5rem;
        }

        .clear-button:hover {
          color: #0066cc;
        }

        .results-count {
          text-align: center;
          margin-top: 1rem;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .services-content {
          padding: 4rem 0;
        }

        .service-category {
          margin-bottom: 4rem;
        }

        .service-category h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #1a1a1a;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          border: 2px solid #e0e0e0;
          text-decoration: none;
          color: #1a1a1a;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          border-color: #0066cc;
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #0066cc;
        }

        .service-card p {
          line-height: 1.6;
          color: #4a4a4a;
          flex-grow: 1;
          margin-bottom: 1rem;
        }

        .learn-more {
          color: #0066cc;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .service-card:hover .learn-more {
          text-decoration: underline;
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
        }

        .no-results h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .no-results p {
          font-size: 1.125rem;
          color: #6c757d;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          background: #0066cc;
          color: white;
          font-weight: 600;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #0052a3;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .services-hero h1 {
            font-size: 2rem;
          }

          .service-category h2 {
            font-size: 1.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
