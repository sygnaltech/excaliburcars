
/*
 * Site
 */

import { IModule, Page } from "@sygnal/sse";
import posthog from 'posthog-js'

// import gsap from 'gsap'; 
 

export class Site implements IModule {

  constructor() {
  }

  /**
   * Setup code runs synchronously, inline, at the end of the </head>. 
   * It's used for special init tasks that must be performed early, and which do not require
   * the DOM to be loaded. 
   */
  setup() {

    Page.loadEngineCSS("site.css"); 

    // Init Posthog
    // Only on non-staging pages 
//    if (!window.location.host.endsWith('.webflow.io')) {
    posthog.init('phc_gs1Rw2IqWPLtFc6NccIGJfs7UNpT5AGw11Y7IAXs0zz', { api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only' })
//    }
    
  }

  /**
   * Exec code runs after the DOM has processed. 
   */
  exec() {

    // Put your site-level custom code here
    // it will have full access to the DOM 

  }

}
