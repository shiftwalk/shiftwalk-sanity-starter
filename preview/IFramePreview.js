import 'sanity-mobile-preview/dist/index.css?raw'

import PropTypes from 'prop-types'
/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react'
import SanityMobilePreview from 'sanity-mobile-preview'
import styles from './IFramePreview.module.css'
import { createUrl } from '../utils/resolveProductionUrl'

/**
 * Explore more examples of previews:
 * https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes
 */

const IframePreview = props => {
  const { options } = props
  const { displayed } = props.document

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    )
  }

  const url = createUrl({ globalSlug: options.globalSlug, slug: displayed.slug })

  if (!url) {
    return (
      <div className={styles.componentWrapper}>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    )
  }
  return options.isMobile
    ? (
    <div className={styles.componentWrapper}>
      <SanityMobilePreview>
        <div className={styles.iframeContainer}>
          <iframe src={url} frameBorder={'0'} />
        </div>
      </SanityMobilePreview>
    </div>
      )
    : (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={'0'} />
      </div>
    </div>
      )
}

IframePreview.propTypes = {
  document: PropTypes.object,
  options: PropTypes.object
}

IframePreview.defaultProps = {
  document: null,
  options: null
}

export default IframePreview
