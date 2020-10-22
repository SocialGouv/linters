/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Fooa = "a";

type Fooao = string;

type Fooaoo = string & string[];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Bar {}
class Baza implements Bar {}

type Fooaooo = Bar;

type Fooaoooo = Bar & Baza;
