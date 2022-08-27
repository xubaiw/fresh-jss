/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { createUseStyles } from "../utils/registry.ts";

const useStyles = createUseStyles({
  "btn-right": { color: "blue" }
});

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const { classes } = useStyles();
  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button className={classes["btn-right"]} onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
