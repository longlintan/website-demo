import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>小微科技</h4>
          <p>引领科技创新，驱动未来发展。我们致力于为企业提供最前沿的技术解决方案。</p>
        </div>
        <div className="footer-section">
          <h4>快速链接</h4>
          <Link to="/">首页</Link>
          <Link to="/products">产品中心</Link>
          <Link to="/contact">联系我们</Link>
        </div>
        <div className="footer-section">
          <h4>联系方式</h4>
          <p>电话：400-888-8888</p>
          <p>邮箱：contact@techvision.com</p>
          <p>地址：北京市朝阳区科技园</p>
        </div>
        <div className="footer-section">
          <h4>关注我们</h4>
          <p>微信公众号：小微科技</p>
          <p>微博：@小微科技</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 小微科技. 保留所有权利。</p>
      </div>
    </footer>
  )
}

export default Footer
