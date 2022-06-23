import React, { useEffect, useState } from "react";

const CountUp = ({ target }) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds
    let totalFrames = 51 - 1; // no. of frames for 2 seconds
    // setInterval에서 0부터 시작하기 위해 1을 뺀다.
    if (totalFrames <= 1) totalFrames = 1; // infinity not allowed
    const oneFrameDuration = totalDuration / totalFrames; // duration for one frame
    let frameNum = 0;

    const counter = setInterval(() => {
      const accelRate = - Math.pow(((frameNum / totalFrames) - 1), 4) + 1;
      // const accelRate = Math.sin(Math.PI / 2 * frameNum / totalFrames);
      const currentCounter = Math.floor(target * accelRate);

      if (frameNum === totalFrames) {
        clearInterval(counter);
      }
      setState(currentCounter);
      frameNum++;
    }, oneFrameDuration);
  }, [target]);

  return <div>{state}</div>;
};

export default CountUp;
