import React from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/Seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

    <div className="video col-sm col-md-6 mb-5">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src="https://www.youtube-nocookie.com/embed/Vywf48Dhyns"
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}
            html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
            span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
            </style>
            <a href=https://www.youtube-nocookie.com/embed/Vywf48Dhyns?autoplay=1>
            <img src=https://img.youtube.com/vi/Vywf48Dhyns/hqdefault.jpg alt='You broke the internet!'
             class='hosted-video'><span>▶</span></a>`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="You broke the internet!"
          loading="lazy"
          width="560"
          height="315"
          frameBorder="0"
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
