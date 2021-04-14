import * as React from "react"
import SEO from "../components/SEO"
import { graphql } from 'gatsby';
import PageLayout from "../layouts/PageLayout";

const HomePage = ({
  data: {
    ssHomePage: {
      title,
      content,
    } 
  }
}) => (
  <PageLayout>
    <SEO title={title} />
    <div className="home-page">
        <div className="jumbotron">
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="display-3">{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: content }} /> 
                    <p>
                        Go headless!
                    </p>
                </div>
            </div>
        </div>
    </div>
        
    </div>
  </PageLayout>
);

export const query = graphql`
  query($id: String!) {
    ssHomePage( id: {eq: $id }) {
        title
        content
    }
  }
`;

export default HomePage;
