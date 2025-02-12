import { GModelElement } from "@eclipse-glsp/server";

import { DynamicTypes } from "./types";

export class GIteration extends GModelElement {
  override type = DynamicTypes.ITERATION;

  iterable?: string;
  iterand?: string;
  template?: GModelElement;
}
