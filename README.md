# fresh-jss

Use Deno [`fresh`](https://fresh.deno.dev/) with [`jss`](https://cssinjs.org/) hooks.

## Example

First add the registry to your project:

```js
// utils/registry.ts
import { createRegistry } from "https://deno.land/x/fresh-jss/mod.ts";
const { registry, createUseStyles } = createRegistry();
export { registry, createUseStyles }
```

Then use it in your routes, islands and components:

```js
// routes/index.tsx
/** @jsx h */
import { h } from "preact";
import { createUseStyles } from "../utils/registry.ts";

const useStyles = createUseStyles({
  "red": { color: "red" }
});

export default function Home() {
  const { classes } = useStyles();
  return (
    <p className={classes.red}>Red text here</p>
  );
}
```

Finally add the registry to page template to enable SSR:

```js
// routes/_app.tsx
/** 
  @jsx h
  @jsxFrag Fragment
 */
import { h, Fragment } from "preact";
import { registry } from "../utils/registry.ts";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <style>{ registry.toString() }</style>
      </Head>
      <props.Component />
    </>
  );
}
```

See [`example`](./example) directory for details.