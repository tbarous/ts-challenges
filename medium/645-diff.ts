/*
  645 - Diff
  -------
  ### Question

  Get an `Object` that is the difference between `O` & `O1`
*/

/* _____________ Your Code Here _____________ */

type Diff<O, O1> = {
  [key in keyof (O & O1) as key extends keyof O1
    ? key extends keyof O
      ? never
      : key
    : key]: key extends keyof O
    ? O[key]
    : key extends keyof O1
    ? O1[key]
    : never;
};

type Test = Diff<Foo, Bar>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
