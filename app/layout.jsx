import Navbar from '../components/Navbar';

import '../assets/styles/globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Property Legends | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
