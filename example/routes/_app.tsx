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
        <meta name="description" content="Hello world!" />
        <style>{ registry.toString() }</style>
      </Head>
      <props.Component />
    </>
  );
}