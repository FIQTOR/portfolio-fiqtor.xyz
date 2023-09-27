import React from 'react';
import { Metadata } from 'next';
import { METADATA } from '@/common/constant/metadata';
import Home from '@/modules/home';
import Container from '@/common/components/elements/container';

export const metadata: Metadata = {
  title: `Personal Website ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

export default async function HomePage() {
  return (
    <Container>
      <Home />
    </Container>
  )
}