import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.NODE_ENV !== "production"
    ? String(process.env.STRIPE_PUBLISHABLE_KEY)
    : String(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
);
