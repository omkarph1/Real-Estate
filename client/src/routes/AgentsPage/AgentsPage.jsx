// AgentsPage.jsx
import React from 'react';
import './AgentsPage.scss';

const agents = [
  {
    id: 1,
    name: 'Amit Deshmukh',
    role: 'Senior Real Estate Advisor',
    bio: 'With over 15 years of experience, Amit specializes in luxury properties and high-value transactions in the Mumbai Metropolitan Region.',
    phone: '+91 98765 43210',
    email: 'amit.d@urbanquarters.com',
    photo: '/icon2.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Riya Mehta',
    role: 'Commercial Property Specialist',
    bio: 'Riya excels in commercial spaces, offering insights into investment opportunities in the booming sectors of Dombivli and Thane.',
    phone: '+91 98675 12345',
    email: 'riya.m@urbanquarters.com',
    photo: '/icon3.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Sameer Khan',
    role: 'Residential Consultant',
    bio: 'Sameer has a keen eye for family-friendly neighborhoods, helping families find homes that suit their lifestyle and budget.',
    phone: '+91 98576 65432',
    email: 'sameer.k@urbanquarters.com',
    photo: '/icon1.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const AgentsPage = () => {
  return (
    <div className="agentsPage">
      <header className="hero-section">
        <img src="/agents.jpg" alt="Agents Banner" />
        <div className="overlay">
          <h1>Meet Our Expert Agents</h1>
          <p>Your dream property is just a consultation away.</p>
        </div>
      </header>

      <section className="agents-list">
        {agents.map(agent => (
          <div className="agent-card" key={agent.id}>
            <img src={agent.photo} alt={agent.name} />
            <div className="agent-info">
              <h2>{agent.name}</h2>
              <h3>{agent.role}</h3>
              <p>{agent.bio}</p>
              <div className="contact-details">
                <p>📞 {agent.phone}</p>
                <p>📧 <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
              </div>
              <div className="social-links">
                <a href={agent.social.linkedin} className="linkedin">LinkedIn</a>
                <a href={agent.social.twitter} className="twitter">Twitter</a>
                <a href={agent.social.instagram} className="instagram">Instagram</a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; 2024 UrbanQuarters Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AgentsPage;
