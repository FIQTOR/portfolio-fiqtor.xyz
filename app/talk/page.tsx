import Container from '@/common/components/elements/container'
import { METADATA } from '@/common/constant/metadata'
import Contact from '@/modules/contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `Contact ${METADATA.exTitle}`,
    alternates: {
        canonical: process.env.DOMAINE,
    },
}


export default function ContactPage() {
    return (
        <Container>
            <Contact />
        </Container>
    )
}
