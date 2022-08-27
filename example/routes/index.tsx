/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import { createUseStyles } from "../utils/registry.ts";

const useStyles = createUseStyles({
  p: { color: "red" }
});

export default function Home() {
  const { classes } = useStyles();
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p className={classes.p}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <Counter start={5} />
    </div>
  );
}
