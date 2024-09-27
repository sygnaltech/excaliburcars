
/*
 * Page | Booking 
 */

import { IModule } from "@sygnal/sse";
import posthog from 'posthog-js'
import Cookies from 'js-cookie';






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


          // Only check and set the transaction ID if the form is valid
          if (form.checkValidity()) {

            // Create a transaction ID
            this.checkAndSetTransactionId();

          }


        });
    }

  }

  checkAndSetTransactionId(): void {
    // Check if the transactionId cookie exists
    let transactionId = Cookies.get('transactionId');
    
    // If it doesn't exist, generate a new UUID and set the cookie
//    if (!transactionId) {
        transactionId = crypto.randomUUID(); // Generate unique ID
        Cookies.set('transactionId', transactionId, { expires: 7 }); // Set cookie with a 7-day expiration
        console.log('New Transaction ID set:', transactionId);
    // } else {
    //     console.log('Transaction ID exists:', transactionId);
    // }
}

}
