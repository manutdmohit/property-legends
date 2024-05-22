import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthProvider from '@/components/AuthProvider';

import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';
import 'photoswipe/dist/photoswipe.css';

import { ToastContainer } from 'react-toastify';

import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
  title: 'Property Legends | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main>{children}</main>
              <Footer />
              <ToastContainer />
            </div>
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
