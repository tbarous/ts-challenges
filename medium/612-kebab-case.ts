/*
  612 - KebabCase
  -------
  ### Question

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```
*/

/* _____________ Your Code Here _____________ */

type Match<S extends string> = S extends Uppercase<S>
  ? S extends Lowercase<S>
    ? false
    : true
  : false;

type KebabCase<S, Prev = ""> = S extends `${infer First}${infer Others}`
  ? Match<First> extends true
    ? Prev extends ""
      ? `${Lowercase<First>}${KebabCase<Others, First>}`
      : `-${Lowercase<First>}${KebabCase<Others, First>}`
    : `${First}${KebabCase<Others, First>}`
  : S;

type Test = KebabCase<"ABC">;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];
