import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Yavin</title>
export default function Yavin() {
    return (
        <Layout>
            <h1>Yavin</h1>
        </Layout>
    )
} 