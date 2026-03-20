import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 模拟表单提交
    console.log('提交的数据:', formData)
    setSubmitted(true)
    // 重置表单
    setFormData({
      name: '',
      phone: '',
      company: '',
      message: ''
    })
    // 3秒后隐藏成功消息
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contact-page">
      <div className="section-title">
        <h2>联系我们</h2>
        <p>期待与您的合作，请留下您的信息</p>
      </div>
      <div className="contact-container">
        {submitted && (
          <div className="success-message">
            提交成功！我们的工作人员将尽快与您联系。
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名 *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="请输入您的姓名"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">联系电话 *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="请输入您的联系电话"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">公司名称</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="请输入您的公司名称"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">留言内容</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="请描述您的需求或问题"
            />
          </div>
          <button type="submit" className="btn btn-primary form-submit">
            提交信息
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
