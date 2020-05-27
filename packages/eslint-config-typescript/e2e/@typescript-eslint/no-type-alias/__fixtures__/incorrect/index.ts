/* eslint-disable @typescript-eslint/no-extraneous-class */

type Foou = "a";

type Foouo = string;

type Foouoo = string & string[];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Bar {}
class Baz implements Bar {}

type Foouooo = Bar;

type Foouoooo = Bar & Baz;
