import { useEffect, useRef, useState } from "react";
import { Cat } from "react-kawaii";
import { styler, tween, merge, action, easing } from "popmotion";
import WatchingYou from "react-watching-you";

const kawaii_selectors = {
  sad: {
    mouth: "#kawaii-face__mouth__sad",
    eyes: "#kawaii-face__eyes__circle",
  },
  shocked: {
    mouth: "#kawaii-face__mouth__shocked",
    eyes: "#kawaii-face__eyes__circle",
  },
  happy: {
    mouth: "#kawaii-face__mouth__happy",
    eyes: "#kawaii-face__eyes__circle",
  },
  blissful: {
    mouth: "#Combined-Shape",
    eyes: "#kawaii-face__eyes__arc",
  },
  lovestruck: {
    mouth: "#Combined-Shape",
    eyes: "#kawaii-face__eyes__heart",
  },
  excited: {
    mouth: "#Combined-Shape",
    eyes: "#kawaii-face__eyes__circle",
  },
  ko: {
    mouth: "#kawaii-face__mouth__sad",
    eyes: "#kawaii-face__eyes__ko",
  },
};

const Kawaii = ({ mood, focusedInput }) => {
  const [emotion, setEmotion] = useState(mood);
  const [startWatching, setStartWatching] = useState(false);
  const timeout = useRef(() => {});
  const catRef = useRef();

  useEffect(() => {
    setEmotion(mood);
  }, [mood]);

  useEffect(() => {
    if (catRef.current) {
      const mouth = styler(
        catRef.current.querySelector(kawaii_selectors[emotion].mouth)
      );
      const eyeLeft = styler(
        catRef.current.querySelector(
          kawaii_selectors[emotion].eyes + ":first-child"
        )
      );
      const eyeRight = styler(
        catRef.current.querySelector(
          kawaii_selectors[emotion].eyes + ":last-child"
        )
      );
      catRef.current
        .querySelector("#kawaii-cat_legs")
        .addEventListener("click", () => {
          clearTimeout(timeout.current);
          setEmotion("shocked");
          timeout.current = setTimeout(() => setEmotion("excited"), 3000);
        });
      catRef.current
        .querySelector("#kawaii-cat_body")
        .addEventListener("click", (event) => {
          if (event.detail === 3) {
            clearTimeout(timeout.current);
            setEmotion("ko");
            timeout.current = setTimeout(() => setEmotion("excited"), 3000);
          }
        });
      catRef.current
        .querySelector("#kawaii-face")
        .addEventListener("dblclick", () => {
          clearTimeout(timeout.current);
          setEmotion("lovestruck");
          timeout.current = setTimeout(() => setEmotion("excited"), 3000);
        });
      catRef.current
        .querySelector("#kawaii-face")
        .addEventListener("click", () => {
          clearTimeout(timeout.current);
          setEmotion("happy");
          timeout.current = setTimeout(() => setEmotion("excited"), 3000);
        });
      catRef.current
        .querySelector("#kawaii-cat_belly")
        .addEventListener("click", () => {
          clearTimeout(timeout.current);
          setEmotion("blissful");
          timeout.current = setTimeout(() => setEmotion("excited"), 3000);
        });
      catRef.current
        .querySelector("#kawaii-cat_belly")
        .addEventListener("dblclick", () => {
          clearTimeout(timeout.current);
          setEmotion("sad");
          timeout.current = setTimeout(() => setEmotion("excited"), 3000);
        });
      const tail = styler(catRef.current.querySelector("#kawaii-cat_tail"));
      tween({
        from: { x: 29.23, y: 153.846, rotate: 0 },
        to: { x: 29.23, y: 153.846, rotate: 20 },
        ease: easing.backInOut,
        duration: 1300,
        yoyo: Infinity,
      }).start(tail.set);
      const showEye = tween({
        from: { scaleY: 0.3 },
        to: { scaleY: 1 },
        duration: 400,
      });
      const show = tween({
        from: { scaleY: 0.3 },
        to: { scaleY: 1 },
        duration: 200,
      });
      const blinkEye = tween({
        from: { scaleY: 1 },
        to: { scaleY: 0.3 },
        duration: 100,
        flip: 1,
      });
      const closeMouth = tween({
        from: { scaleY: 1 },
        to: {
          scaleY:
            kawaii_selectors[emotion].mouth === "#Combined-Shape" ? 1.2 : 0.3,
        },
        duration: 300,
        flip: 1,
      });
      const eyeLeftAction = action(({ complete }) => {
        showEye.start({
          update: eyeLeft.set,
          complete: () => {
            complete();
            setInterval(() => blinkEye.start({ update: eyeLeft.set }), 2000);
          },
        });
      });
      const eyeRightAction = action(({ complete }) => {
        showEye.start({
          update: eyeRight.set,
          complete: () => {
            complete();
            setInterval(() => blinkEye.start({ update: eyeRight.set }), 2000);
          },
        });
      });
      const mouthAction = action(({ complete }) => {
        show.start({
          update:
            kawaii_selectors[emotion].mouth === "#kawaii-face__mouth__sad"
              ? mouth.render
              : mouth.set,
          complete: () => {
            complete();
            setInterval(
              () =>
                closeMouth.start({
                  update:
                    kawaii_selectors[emotion].mouth ===
                    "#kawaii-face__mouth__sad"
                      ? mouth.render
                      : mouth.set,
                }),
              3500
            );
          },
        });
      });
      merge(mouthAction, eyeLeftAction, eyeRightAction).start();
    }
  }, [emotion]);

  useEffect(() => {
    catRef.current
      .querySelector("#kawaii-cat_tail")
      .addEventListener("click", () => {
        setStartWatching(!startWatching);
      });
  }, [startWatching]);

  useEffect(() => {
    setStartWatching(!!focusedInput);
  }, [focusedInput]);

  return (
    <div ref={catRef} className="kawaii">
      <Cat size={150} mood={emotion} color="#596881" />
      {startWatching && (
        <>
          <div className="eye-ball-left">
            <WatchingYou
              power={{ x: 5, y: 5 }}
              rotatable={false}
              target={focusedInput}
              targetType={focusedInput ? "input" : "mouse"}
            >
              <div className="eye-pupil" />
            </WatchingYou>
          </div>
          <div className="eye-ball-right">
            <WatchingYou
              power={{ x: 5, y: 5 }}
              rotatable={false}
              target={focusedInput}
              targetType={focusedInput ? "input" : "mouse"}
            >
              <div className="eye-pupil" />
            </WatchingYou>
          </div>
        </>
      )}
    </div>
  );
};

export default Kawaii;
