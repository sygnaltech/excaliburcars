
/*
 * Page | Booking 
 */

import { IModule } from "@sygnal/sse";
import posthog from 'posthog-js'

export class BookingPage implements IModule {

  constructor() {
  }

  setup() {
        
  }

  exec() {

    /**
     * Identify the user by email, on booking 
     */

    // Get the form by its ID
    const form = document.getElementById('wf-form-Booking-Form') as HTMLFormElement;

    if (form) {
        // Attach the submit event handler
        form.addEventListener('submit', (event: Event) => {
            // Locate the email input using the data-name attribute
            const emailInput = form.querySelector('[data-name="Email"]') as HTMLInputElement;

            if (emailInput) {
                // Capture the email value
                const email = emailInput.value;
                
                // Perform the logging action (e.g., using PostHog)
                posthog.identify(email); 

                // Allow the form to submit normally by NOT calling event.preventDefault()
            }
        });
    }

  }

}
