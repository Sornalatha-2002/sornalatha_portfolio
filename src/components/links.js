import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// Email is always shown; LinkedIn / GitHub appear only once real URLs are set in data/portfolio.js.
export const socialLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, text: profile.email, Icon: Mail },
  profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, text: host(profile.linkedin), Icon: Linkedin, external: true },
  profile.github && { label: 'GitHub', href: profile.github, text: host(profile.github), Icon: Github, external: true },
].filter(Boolean);
