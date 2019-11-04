import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <span>
        Sign up for our newsletter and stay informed kfsdjfkjsdfkjdskfj
      </span>
      <form>
        <input
          type="email"
          name="email"
          label="Enter your email"
          placeholder="you@email.com"
        />
        <button type="submit">
          <ion-icon name="checkmark"></ion-icon>
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
