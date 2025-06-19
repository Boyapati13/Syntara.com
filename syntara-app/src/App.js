import React from 'react';
import FeeModule from './modules/FeeModule';
import AttendanceModule from './modules/AttendanceModule';
import TeacherPayroll from './modules/TeacherPayroll';

function FeatureCard({ title, children }) {
  return (
    <div className="feature-card">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Syntara</h1>
        <p className="tagline">Smart Fleet, RFID, and IoT Solutions</p>
      </header>
      <main className="features">
        <FeatureCard title="Fleet Management">
          Real-time route planning and fleet optimization for maximum efficiency.
        </FeatureCard>
        <FeatureCard title="RFID Tracking">
          Accurate asset tracking with our advanced RFID technology.
        </FeatureCard>
        <FeatureCard title="IoT Solutions">
          Live monitoring and device management powered by the Internet of Things.
        </FeatureCard>
        <FeatureCard title="Fee Module">
          Easily manage student fees and payment tracking in one place.
        </FeatureCard>
        <FeatureCard title="Attendance Module">
          Monitor student attendance and generate reports effortlessly.
        </FeatureCard>
        <FeatureCard title="Teacher Payroll">
          Streamline payroll calculations and payments for teachers.
        </FeatureCard>
      </main>
      <section className="modules">
        <FeeModule />
        <AttendanceModule />
        <TeacherPayroll />
      </section>
      <footer className="footer">&copy; {new Date().getFullYear()} syntara.com</footer>
    </div>
  );
}
