import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Mygeeto</title>
export default function Mygeeto() {
    return (
        <Layout>
            <h1>Mygeeto</h1>
        </Layout>
    )
} 