import logo from "./logo.svg";
import "./App.css";
import { Steps, Hints } from "intro.js-react";
import { useState } from "react";
import "intro.js/introjs.css";
import styled from "styled-components";

function App() {
    const [stepsEnabled, setStepsEnabled] = useState(false);
    const [initialStep, setInitialStep] = useState(0);

    const onExit = () => {
        setStepsEnabled(false);
    };

    const steps = [
        {
            element: ".button1",
            intro: "test 1",
            tooltipClass: "customTooltip",
        },
        {
            element: ".button2",
            intro: "test 2",
        },
        {
            element: ".button3",
            intro: "test 3",
        },
    ];
    return (
        <Wrapper style={{ display: "flex" }}>
            <AAA
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
            />
            <div
                style={{ backgroundColor: "red", width: 200, marginLeft: 100 }}
                className="button1"
            >
                12
            </div>
            <div
                style={{ backgroundColor: "red", width: 200, marginLeft: 100 }}
                className="button2"
            >
                2
            </div>
            <div
                style={{ backgroundColor: "red", width: 200, marginLeft: 100 }}
                className="button3"
            >
                3
            </div>

            <button onClick={() => setStepsEnabled(true)}>시작하기</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    background-color: blue;
    .customTooltip {
        max-width: 500px;
    }
`;

const AAA = styled(Steps)`
    .customTooltip {
        max-width: 500px;
    }
`;

export default App;
