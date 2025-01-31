import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white py-8'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
        {/* Logo and Tagline */}
        <div className='text-center md:text-left'>
          <h1 className='text-2xl font-bold'>Rushikesh Suryawanshi</h1>
          <p className='text-gray-400'>Crafting experiences with code and creativity.</p>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-6 justify-center'>
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-pink-500 transition duration-300'>
            <FaInstagram title="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-blue-600 transition duration-300'>
            <FaLinkedin title="LinkedIn" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-gray-500 transition duration-300'>
            <FaGithub title="GitHub" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-red-600 transition duration-300'>
            <FaYoutube title="YouTube" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className='text-center md:text-right text-gray-400'>
          <p>© {new Date().getFullYear()} Rushikesh Suryawanshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
