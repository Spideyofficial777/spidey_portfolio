import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import PortfolioHome from "pages/portfolio-home";
import IndividualArticleView from "pages/individual-article-view";
import BlogArticles from "pages/blog-articles";
import ContactResume from "pages/contact-resume";
import ProjectsGallery from "pages/projects-gallery";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/portfolio-home" element={<PortfolioHome />} />
        <Route path="/individual-article-view" element={<IndividualArticleView />} />
        <Route path="/blog-articles" element={<BlogArticles />} />
        <Route path="/contact-resume" element={<ContactResume />} />
        <Route path="/projects-gallery" element={<ProjectsGallery />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;