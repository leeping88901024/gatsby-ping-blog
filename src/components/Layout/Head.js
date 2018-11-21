import React from 'react';
import { Helmet } from 'react-helmet';
import { config } from '../../../data';

const Head = () => (
  <Helmet defaultTitle={config.title} titleTemplate={`%s | ${config.title}`}>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={config.meta.description} />
    <meta name="keyword" content={config.meta.keyword} />
    <meta name="theme-color" content={config.meta.theme_color} />
    <meta
      name="msapplication-navbutton-color"
      content={config.meta.theme_color}
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content={config.meta.theme_color}
    />
    <link
      rel="shortcut icon"
      href={
        config.meta.favicon
      }
    />
    <link
      rel="alternate"
      type="application/atom+xml"
      title={config.title}
      href="/atom.xml"
    />
    {/*
    <meta
      name="google-site-verification"
      // content={config.meta.google_site_verification}
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/solarized-light.min.css"
    />
    */}
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/solarized-light.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css"
    />

  </Helmet>
);

export default Head;
