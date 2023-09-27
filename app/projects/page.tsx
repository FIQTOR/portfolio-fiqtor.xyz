import Container from '@/common/components/elements/container'
import { METADATA } from '@/common/constant/metadata'
import Project from '@/modules/project'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `All Projects ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}


export default function ProjectPage() {
  return (
    <Container>
      <Project />
    </Container>
  )
}
