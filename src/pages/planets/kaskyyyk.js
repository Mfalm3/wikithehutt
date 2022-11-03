import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Kashyyyk</title>
export default function Kashyyyk() {
    return (
        <Layout>
            <h1>Kashyyyk</h1>
        </Layout>
    )
} 