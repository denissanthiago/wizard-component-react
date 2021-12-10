import React from "react";
import "./styles.css";
import Wizard, {
  WizardPages,
  WizardButtonPrev,
  WizardButtonNext,
  useWizardProgress,
} from "./Wizard";

const Page1 = () => (
  <div>
    <h1>Pagina 1</h1>
  </div>
);

const Page2 = () => (
  <div>
    <h1>Pagina 2</h1>
  </div>
);
const Page3 = () => (
  <div>
    <h1>Pagina 3</h1>
  </div>
);

const Progress = () => {
  const { currentIndex, steps } = useWizardProgress();
  return (
    <div className="wizard__progress">
      State {currentIndex} of {steps}
    </div>
  );
};

const Navigation = () => {
  // const { nextPage, prevPage } = useWizardButtons();
  return (
    <div className="wizard__buttons">
      <WizardButtonPrev className="wizard__buttons-left">
        Anterior
      </WizardButtonPrev>
      <WizardButtonNext className="wizard__buttons-right">
        Siguiente
      </WizardButtonNext>
    </div>
  );
};

const App = () => {
  return (
    <Wizard className="wizard">
      <Progress />
      <WizardPages className="wizard__content">
        <Page1 />
        <Page2 />
        <Page3 />
      </WizardPages>
      <Navigation />
    </Wizard>
  );
};

export default App;