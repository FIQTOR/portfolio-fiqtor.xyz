import React from 'react';
import { Metadata } from 'next';
import { METADATA } from '@/common/constant/metadata';
import Home from '@/modules/home';
import Layout from '@/common/layouts/layout';

export const metadata: Metadata = {
  title: `Personal Website ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

export default async function HomePage() {
  return (
    <Home />
  )
}