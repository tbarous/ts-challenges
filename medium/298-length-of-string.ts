/*
  298 - Length of String
  -------
  ### Question

  Compute the length of a string literal, which behaves like `String#length`.
*/

/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string, Arr extends any[] = []> = S extends ""
  ? Arr["length"]
  : S extends `${infer First}${infer Others}`
  ? LengthOfString<Others, [...Arr, First]>
  : never;

type Test = LengthOfString<"">;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
