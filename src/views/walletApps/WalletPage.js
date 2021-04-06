import React from 'react'
import { Footer } from 'views/Footer'
import NavBar from 'views/NavBar';
import { WalletApps } from './WalletApps'

export const WalletPage = () => {
    return (
      <div>
        <NavBar />
        <WalletApps />
        <Footer />
      </div>
    );
}
