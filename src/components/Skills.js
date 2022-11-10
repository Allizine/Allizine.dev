import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
import "./comp.scss";

function Skills() {
  return (
    <div className="container-fluid bg-dark text-center text-primary">
      <h1>
        <strong>SKILLSET</strong>
      </h1>
      <div class="album py-5 bg-dark">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#55595c" dy=".3em">
                  <DiJavascript1 size={80} />
                  <p>Javascript</p>
                </text>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <rect width="100%" height="100%" fill="#eceeef"></rect>
                <text x="50%" y="50%" fill="#55595c" dy=".3em">
                  <DiReact size={80} />
                  <p>REACT</p>
                </text>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  <DiGit size={80} />
                  <p>GIT</p>
                </text>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  {" "}
                  <DiMongodb size={80} />
                  <p>MongoDB</p>
                </text>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#55595c" dy=".3em">
                  <DiNodejs size={80} />
                  <p>NodeJs</p>
                </text>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#55595c" dy=".3em">
                  <DiPython size={80} />
                  <p>Python</p>
                </text>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
