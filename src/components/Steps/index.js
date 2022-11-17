import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./index.module.css";
import activeRadioIcon from "../../assets/icons/activeRadio.svg";
import checkIcon from "../../assets/icons/check.svg";
import radioIcon from "../../assets/icons/radio.svg";

const Steps = forwardRef(({ children, getCurrentStep }, ref) => {
  const [steps, setSteps] = useState([]);

  const [current, setCurrent] = useState(0);

  const nextComponent = () => {
    if (current < children.length - 1) {
      setCurrent((prevState) => {
        const update = prevState + 1;
        navigate(update * 2);
        return update;
      });
    }
  };

  const prevComponent = () => {
    if (current > 0) {
      setCurrent((prevState) => {
        const update = prevState - 1;
        navigate(update * 2);
        return update;
      });
    }
  };

  const check = () => {
    const id = current * 2;

    setSteps((prevState) => {
      const completeStep = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: true };
        }
        return item;
      });

      let current = null;
      const deactiveStep = completeStep.map((item, index) => {
        if (item.isActive) {
          current = index;
          return { ...item, isActive: false };
        } else {
          return item;
        }
      });
      // Checking if last element is completed or not
      if (id > children.length - 1) {
        deactiveStep[current].isActive = true;
      } else {
        deactiveStep[current + 2].isActive = true;
      }

      const activeStep = deactiveStep;
      return activeStep;
    });
    // Displaying next Component
    nextComponent();
  };

  const unCheck = () => {
    const id = current * 2;

    setSteps((prevState) => {
      const completeStep = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: false };
        }
        return item;
      });

      let current = null;
      const deactiveStep = completeStep.map((item, index) => {
        if (item.isActive) {
          current = index;
          return { ...item, isActive: false };
        } else {
          return item;
        }
      });
      // Checking if last element is completed or not
      if (id < 0) {
        // deactiveStep[current].isActive = true;
      } else {
        deactiveStep[id].isActive = true;
      }

      const activeStep = deactiveStep;
      return activeStep;
    });

    // Displaying previous Component
    prevComponent();
  };

  // Normal navigation for active indicator
  const navigate = (id) => {
    setSteps((prevState) => {
      const oldActiveStep = prevState.map((item) => {
        if (item.isActive) {
          return { ...item, isActive: false };
        }
        return item;
      });

      const newActiveStep = oldActiveStep.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: true };
        }
        return item;
      });
      return newActiveStep;
    });

    const page = id / 2;
    setCurrent(page);

    try {
      // Send current active step to parent
      getCurrentStep(page);
    } catch {
      // do nothing
    }
  };

  const goBack = () =>{
    unCheck();
    return current;
  }

  const goNext = () =>{
    check();
    return current;
  }

  // Very important for calling function from parent
  useImperativeHandle(
    ref,
    () => ({
      goBack,
      goNext
    }),
    [goBack,goNext,current]
  );

  useEffect(() => {
    const _steps = new Array(children.length * 2 - 1)
      .fill()
      .map((item, index) => {
        if (index === 0) {
          return { isActive: true, isCompleted: false, id: index };
        }
        return { isActive: false, isCompleted: false, id: index };
      });
    setSteps(_steps);
  }, []);

  return (
    <>
      <div className={styles.steps}>
        {steps.map((item, index) => {
          if (index % 2 === 0) {
            if (item.isActive) {
              return (
                <div key={index} onClick={() => navigate(item.id)}>
                  <img
                    alt="active radio icon"
                    layout="fixed"
                    width={34}
                    height={34}
                    src={activeRadioIcon}
                  />
                </div>
              );
            }
            if (item.isCompleted) {
              return (
                <div key={index} onClick={() => navigate(item.id)}>
                  <img
                    alt="check icon"
                    layout="fixed"
                    width={34}
                    height={34}
                    src={checkIcon}
                  />
                </div>
              );
            }

            if (!item.isCompleted && !item.isActive) {
              return (
                <div key={index} onClick={() => navigate(item.id)}>
                  <img
                    alt="radio icon"
                    layout="fixed"
                    width={34}
                    height={34}
                    src={radioIcon}
                  />
                </div>
              );
            }
          }

          return (
            <div
              key={index}
              style={{
                backgroundColor: steps[index - 1]?.isCompleted
                  ? "#3B7DED"
                  : "#D1D5DB",
              }}
            >
              {/* nothing */}
            </div>
          );
        })}
      </div>

      {children[current]}
    </>
  );
});

const Step = ({ children }) => {
  return <div style={{ height: "100%", width: "100%" }}>{children}</div>;
};

export { Steps, Step };
