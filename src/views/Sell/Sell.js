import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import register from "../../assets/images/register.svg";
import validation from "../../assets/images/validation.svg";
import upload from "../../assets/images/upload.svg";
import "./Sell.css";

const useColorlibStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <img alt="register" src={register} />,
    2: <img alt="validation" src={validation} />,
    3: <img alt="upload" src={upload} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const Sell = () => {
  const steps = ["Registration", "Verification & Approval", "Product Upload"];
  const activeStep = 3;
  return (
    <div className="sell-container">
      <p className="sell-container__title">
        Process to Start Selling with Nature's Deck
      </p>
      <Stepper alternativeLabel activeStep={activeStep} connector={<div></div>}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="sell-container__start-sell">
        <button className="sell-container__start-sell-btn">
          Start Selling &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Sell;
