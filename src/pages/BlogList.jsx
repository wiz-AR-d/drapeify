import { useState } from 'react'
import { Link } from 'react-router-dom'
import blogsData from '../data/blogs.json'
import './BlogList.css'

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'D2C Growth', 'AI Fashion', 'Cost Savings']

  // Filter blog posts
  const filteredBlogs = blogsData.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Separate featured post if no search/filter is active
  const featuredPost = searchQuery === '' && activeCategory === 'All'
    ? blogsData.find(post => post.featured)
    : null

  const displayBlogs = featuredPost 
    ? filteredBlogs.filter(post => post.id !== featuredPost.id)
    : filteredBlogs

  return (
    <div className="blog-list-page">
      {/* ── HERO BANNER ── */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-h1">The Drapeify Thread</h1>
          <p className="blog-hero-subtitle">
            Insights on AI fashion modeling, catalog photography cost savings, and D2C brand strategy.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featuredPost && (
        <section className="featured-section">
          <div className="container">
            <Link to={`/blog/${featuredPost.slug}`} className="featured-card">
              <div className="featured-img-c">
                <img src={featuredPost.coverImage} alt={featuredPost.title} className="img-cover" />
              </div>
              <div className="featured-content">
                <span className="blog-category-tag">{featuredPost.category}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="blog-card-meta">
                  <div>
                    <p className="author-name">{featuredPost.author.name}</p>
                    <p className="post-date-read">{featuredPost.date} • {featuredPost.readTime}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── FILTER & SEARCH CONTROLS ── */}
      <section className="blog-controls-section">
        <div className="container">
          <div className="blog-controls-wrapper">
            <div className="category-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="blog-search-wrapper">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
              <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOGS GRID ── */}
      <section className="blog-grid-section">
        <div className="container">
          {filteredBlogs.length === 0 ? (
            <div className="no-blogs-found">
              <h3>No articles found matching your criteria.</h3>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
                className="btn-primary dark"
                style={{ marginTop: '2rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {displayBlogs.map(post => (
                <Link to={`/blog/${post.slug}`} className="blog-card" key={post.id}>
                  <div className="blog-card-img-c">
                    <img src={post.coverImage} alt={post.title} className="img-cover" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-category-tag">{post.category}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <div>
                        <p className="author-name">{post.author.name}</p>
                        <p className="post-date-read">{post.date} • {post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
