
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

//    https://www.excaliburcars.co.nz/services/weddings?utm_source=google&utm_medium=cpc&utm_campaign=21706535023&utm_term=limo&utm_content=713845754774&utm_device=m&utm_placement=&utm_matchtype=b&utm_network=g&utm_location=9122070&utm_interest_location=&utm_targetid=kwd-10036646&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkYE8zs1gLUwOM_XAsJP-atxzOjqwa0xNk0YkbqZOPBJQdBTuHkV0saApjZEALw_wcB

    this.storeUTMParams(); 

  }

  storeUTMParams(): void {
    // Define the list of UTM parameters to look for
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    // Get the current URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if any UTM parameter is present in the URL
    const isAnyUTMFound = utmParams.some(param => urlParams.has(param));
    
    if (isAnyUTMFound) {
      // Iterate through each UTM parameter
      utmParams.forEach(param => {
        const value = urlParams.get(param);
        if (value) {
          // Store the UTM parameter in local storage
          localStorage.setItem(param, value);
        } else {
          // Remove the UTM parameter from local storage if not present in the URL
          localStorage.removeItem(param);
        }
      });
    }
  }

}
