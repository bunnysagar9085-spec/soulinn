
import React, { useState } from 'react';
import Layout from './components/Layout';
import CustomerHome from './views/CustomerHome';
import WorkerDashboard from './views/WorkerDashboard';
import AdminDashboard from './views/AdminDashboard';
import { UserRole } from './types';

const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState<UserRole>(UserRole.CUSTOMER);

  const renderView = () => {
    switch (activeRole) {
      case UserRole.CUSTOMER:
        return <CustomerHome />;
      case UserRole.WORKER:
        return <WorkerDashboard />;
      case UserRole.ADMIN:
        return <AdminDashboard />;
      default:
        return <CustomerHome />;
    }
  };

  return (
    <Layout activeRole={activeRole} setActiveRole={setActiveRole}>
      {renderView()}
    </Layout>
  );
};

export default App;
