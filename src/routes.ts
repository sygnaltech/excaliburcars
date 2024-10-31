/*
 * SITE
 * Main entry point
 * 
 * https://engine.sygnal.com/
 * 
 * ENGINE MODE
 * ?engine.mode=dev
 * ?engine.mode=prod
 * 
 */

import { HomePage } from "./pages/home";
import { RouteDispatcher } from "@sygnal/sse";
import { Site } from "./site";
import { BookingPage } from "./pages/booking";
import { TestVideoPage } from "./pages/test/video";

export const routeDispatcher = (): RouteDispatcher => {
    
    var routeDispatcher = new RouteDispatcher(Site);
    routeDispatcher.routes = {

        // Site pages 
        '/': HomePage,
        '/booking': BookingPage,

        // TEST Pages
        '/test/video': TestVideoPage,
        
    };

    return routeDispatcher;
}

