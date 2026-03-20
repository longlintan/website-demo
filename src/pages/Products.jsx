import { Link } from 'react-router-dom'

function Products() {
  const products = [
    {
      name: '云服务平台',
      description: '提供弹性计算、存储、网络等基础设施服务，支持按需付费，帮助企业降低IT成本。具备高可用性架构，自动扩缩容能力，确保业务稳定运行。',
      tags: ['云计算', '弹性扩展', '高可用']
    },
    {
      name: 'AI智能助手',
      description: '基于最新大语言模型技术，为企业提供智能客服、智能问答、内容生成等AI能力。支持私有化部署，保护数据安全，可深度定制训练。',
      tags: ['人工智能', '大模型', '智能客服']
    },
    {
      name: '数据分析平台',
      description: '一站式大数据分析平台，支持数据采集、清洗、分析、可视化全流程。内置丰富分析模型，帮助企业管理者快速洞察业务趋势。',
      tags: ['大数据', '可视化', 'BI分析']
    },
    {
      name: '物联网平台',
      description: '支持海量设备接入与管理，提供设备监控、远程控制、数据分析等功能。广泛应用于智能制造、智慧城市、智慧农业等场景。',
      tags: ['IoT', '设备管理', '智能制造']
    },
    {
      name: '企业协同办公',
      description: '集成即时通讯、在线文档、视频会议、任务管理等功能的企业级协同平台。支持多端同步，提升团队协作效率。',
      tags: ['协同办公', '即时通讯', '远程协作']
    },
    {
      name: '安全防护系统',
      description: '全方位企业安全解决方案，涵盖网络安全、数据安全、终端安全等领域。实时威胁检测，快速响应处置，保障企业数字资产安全。',
      tags: ['安全防护', '威胁检测', '数据安全']
    }
  ]

  return (
    <div className="products-page">
      <div className="section-title">
        <h2>产品中心</h2>
        <p>为企业提供全方位的数字化产品与服务</p>
      </div>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <div className="product-tags">
              {product.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <p>{product.description}</p>
            <Link to="/contact" className="btn btn-primary">申请试用</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
