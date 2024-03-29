// eslint-disable-next-line no-use-before-define
import React from 'react'

export const Footer: React.FC = () => (
  <footer>
    <div className="grid">
      <div>
        <p>
          Published under the{' '}
          <a
            href="https://github.com/TomDeS/tosu-react/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            MIT License
          </a>
          . Issues, improvements or questions? Create an issue on{' '}
          <a href="https://github.com/TomDeS/tosu-react/issues">GitHub</a> (or
          better yet: create a pull request).
        </p>
      </div>
      <div>
        <p>
          This website uses electricity and functional cookies. Actually we only
          use local storage, to remember your theme preference and make things
          super-duper fast. We don&apos;t track you, sorry.
        </p>
      </div>
    </div>
    <div className="grid">
      <p>
        Hosted by <a href="https://www.netlify.com/">Netlify</a>, thanks!
      </p>
    </div>
  </footer>
)

export default Footer
