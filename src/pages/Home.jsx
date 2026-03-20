import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      icon: '🚀',
      title: '高效稳定',
      description: '采用先进技术架构，确保系统高效运行，稳定性达99.99%'
    },
    {
      icon: '🔒',
      title: '安全可靠',
      description: '多层次安全防护，数据加密传输，为您的业务保驾护航'
    },
    {
      icon: '⚡',
      title: '快速部署',
      description: '一键部署，快速上线，缩短您的产品上市周期'
    },
    {
      icon: '📊',
      title: '数据驱动',
      description: '强大的数据分析能力，助您做出更明智的商业决策'
    }
  ]

  const products = [
    {
      icon: '☁️',
      name: '云服务平台',
      description: '弹性扩展、按需付费的企业级云计算服务'
    },
    {
      icon: '🤖',
      name: 'AI智能助手',
      description: '基于大语言模型的智能客服与业务助手解决方案'
    },
    {
      icon: '📈',
      name: '数据分析平台',
      description: '一站式数据采集、处理、分析与可视化平台'
    }
  ]

  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <h1>科技创新<br /><span>驱动未来</span></h1>
          <p>我们为企业提供领先的数字化解决方案，助力业务转型升级，创造更大价值</p>
          <div className="banner-buttons">
            <Link to="/products" className="btn btn-primary">查看产品</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>免费咨询</Link>
          </div>
        </div>
      </section>

      {/* 卖点 */}
      <section className="features">
        <div className="section-title">
          <h2>为什么选择我们</h2>
          <p>深耕行业多年，我们深知企业数字化转型的痛点与需求</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 产品入口 */}
      <section className="products-preview">
        <div className="section-title">
          <h2>核心产品</h2>
          <p>全方位满足您的业务需求</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.icon}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to="/products" className="btn btn-outline">了解更多</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>准备开启数字化转型之旅？</h2>
        <p>立即联系我们，获取专属解决方案</p>
        <Link to="/contact" className="btn btn-primary">立即咨询</Link>
      </section>
    </>
  )
}

export default Home
