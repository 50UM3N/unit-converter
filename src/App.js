import React, { useState } from "react";

import Area from "./Components/Area";
import DataTransferRate from "./Components/DataTransferRate";
import DigitalStorage from "./Components/DigitalStorage";
import Energy from "./Components/Energy";
import Frequency from "./Components/Frequency";
import FuelEconomy from "./Components/FuelEconomy";
import Length from "./Components/Length";
import Mass from "./Components/Mass";
import PlaneAngle from "./Components/PlaneAngle";
import Pressure from "./Components/Pressure";
import Speed from "./Components/Speed";
import Temperature from "./Components/Temperature";
import Time from "./Components/Time";
import Volume from "./Components/Volume";

export default function App() {
<<<<<<< HEAD
  const [current, setCurrent] = useState("Time");
  const [options] = useState([
    "Area",
    "Data Transfer Rate",
    "Digital Storage",
    "Energy",
    "Frequency",
    "Fuel Economy",
    "Length",
    "Mass",
    "Plane Angle",
    "Pressure",
    "Speed",
    "Temperature",
    "Time",
    "Volume",
  ]);
  const currentRender = {
    Area: <Area />,
    "Data Transfer Rate": <DataTransferRate />,
    "Digital Storage": <DigitalStorage />,
    Energy: <Energy />,
    Frequency: <Frequency />,
    "Fuel Economy": <FuelEconomy />,
    Length: <Length />,
    Mass: <Mass />,
    "Plane Angle": <PlaneAngle />,
    Pressure: <Pressure />,
    Speed: <Speed />,
    Temperature: <Temperature />,
    Time: <Time />,
    Volume: <Volume />,
  };
  const setValue = (e) => {
    setCurrent(e.target.value);
  };
  return (
    <>
      <select value={current} onChange={setValue}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {currentRender[current]}
    </>
  );
=======
    const [current, setCurrent] = useState("Time");
    const [options] = useState([
        "Area",
        "Data Transfer Rate",
        "Digital Storage",
        "Energy",
        "Frequency",
        "Fuel Economy",
        "Length",
        "Mass",
        "Plane Angle",
        "Pressure",
        "Speed",
        "Temperature",
        "Time",
        "Volume",
    ]);
    const currentRender = {
        Area: <Area />,
        "Data Transfer Rate": <DataTransferRate />,
        "Digital Storage": <DigitalStorage />,
        Energy: <Energy />,
        Frequency: <Frequency />,
        "Fuel Economy": <FuelEconomy />,
        Length: <Length />,
        Mass: <Mass />,
        "Plane Angle": <PlaneAngle />,
        Pressure: <Pressure />,
        Speed: <Speed />,
        Temperature: <Temperature />,
        Time: <Time />,
        Volume: <Volume />,
    };
    const setValue = (e) => {
        setCurrent(e.target.value);
    };
    return (
        <div className="container">
            <div className="converter-wrapper">
                <select
                    className="global-select-control"
                    value={current}
                    onChange={setValue}
                >
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
                {currentRender[current]}
            </div>
        </div>
    );
>>>>>>> 1597d7e4150f81679878913d055a70cf0a8b6cd2
}
