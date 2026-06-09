import { useParams, Link } from 'react-router-dom'
import blogsData from '../data/blogs.json'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()

  // Find the matching blog post
  const post = blogsData.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="blog-post-page missing">
        <div className="container" style={{ textAlign: 'center', padding: '12rem 2.4rem' }}>
          <h2>Article Not Found</h2>
          <p style={{ margin: '1.6rem 0 3.2rem 0', color: '#666' }}>
            The article you are looking for does not exist or has been removed.
          </p>
          <Link to="/blog" className="btn-primary dark">
            Back to Blog Feed
          </Link>
        </div>
      </div>
    )
  }

  // Get other blog posts for "Read Next" section
  const recommendedPosts = blogsData
    .filter(p => p.id !== post.id)
    .slice(0, 2)

  return (
    <article className="blog-post-page">
      {/* ── HEADER HERO ── */}
      <header className="post-header">
        <div className="container post-header-container">
          <Link to="/blog" className="post-back-link">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '0.8rem', verticalAlign: 'middle' }}>
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to blog
          </Link>

          <span className="blog-category-tag post-tag">{post.category}</span>
          <h1 className="post-h1">{post.title}</h1>

          <div className="post-author-row">
            <div className="author-details">
              <p className="author-name">{post.author.name}</p>
              <p className="author-role">{post.author.role}</p>
            </div>
            <div className="post-meta-divider"></div>
            <div className="post-date-details">
              <p className="meta-label">Published</p>
              <p className="meta-value">{post.date} • {post.readTime}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── COVER IMAGE ── */}
      <div className="post-cover-section">
        <div className="container">
          <div className="post-cover-img-c">
            <img src={post.coverImage} alt={post.title} className="img-cover" />
          </div>
        </div>
      </div>

      {/* ── BODY CONTENT ── */}
      <section className="post-body-section">
        <div className="container post-body-container">
          <div className="post-content-wrapper">
            {post.sections.map((section, idx) => {
              if (section.type === 'heading') {
                return <h2 key={idx} className="post-body-h2">{section.text}</h2>
              }
              if (section.type === 'paragraph') {
                return <p key={idx} className="post-body-p">{section.text}</p>
              }
              if (section.type === 'list') {
                return (
                  <ul key={idx} className="post-body-ul">
                    {section.items.map((item, liIdx) => (
                      <li key={liIdx} className="post-body-li">{item}</li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED POSTS ── */}
      {recommendedPosts.length > 0 && (
        <section className="recommended-section">
          <div className="container">
            <div className="recommended-header">
              <h2>Read Next</h2>
              <Link to="/blog" className="btn-underline">
                View all articles
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" style={{ marginLeft: '0.8rem' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9771C0 6.41203 0.352576 6.7646 0.787502 6.7646L9.6075 6.7646L5.74875 10.6234C5.4443 10.9278 5.4443 11.4214 5.74875 11.7259C6.05319 12.0303 6.5468 12.0303 6.85124 11.7259L11.709 6.86805C12.2011 6.37599 12.2011 5.5782 11.709 5.08614L6.85124 0.228344C6.54679 -0.0761001 6.05319 -0.0761001 5.74875 0.228343C5.4443 0.532789 5.4443 1.02639 5.74874 1.33084L9.6075 5.1896L0.787503 5.1896C0.352577 5.1896 0 5.54217 0 5.9771Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
            
            <div className="recommended-grid">
              {recommendedPosts.map(p => (
                <Link to={`/blog/${p.slug}`} className="blog-card" key={p.id}>
                  <div className="blog-card-img-c">
                    <img src={p.coverImage} alt={p.title} className="img-cover" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-category-tag">{p.category}</span>
                    <h3 className="blog-card-title">{p.title}</h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <div className="blog-card-meta">
                      <div>
                        <p className="author-name">{p.author.name}</p>
                        <p className="post-date-read">{p.date} • {p.readTime}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
