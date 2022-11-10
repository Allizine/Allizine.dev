import React from "react";
import "./comp.scss";

function Hero() {
  return (
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">
          <strong className="text-primary">ALLIZINE.DEV</strong>
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 primary mb-4 text-body-text-color">
            Hello! My name is <strong className="text-primary">ALEX</strong>. I
            am a Bootcamp Graduate driven to try and make the world a better
            place by using code!
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-sm-3 fw-bold"
            >
              Contact
            </button>
            <button type="button" class="btn btn-light btn-lg px-4">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
