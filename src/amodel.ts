export enum Type {
  STRING = 'string',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  OBJECT = 'object'
}

export enum StringStyle {
  INPUT = 'input',
  TEXTAREA = 'textarea'
}

export enum IntegerStyle {
  INPUT = 'input',
  RANGE = 'range'
}

export enum BooleanStyle {
  CHECKBOX = 'checkbox',
  SWITCH = 'switch'
}

export enum EnumStyle {
  SELECT = 'select',
  RADIO = 'radio'
}

export interface AModelElementSchema {
  type: Type;
  key?: string;
  label?: string;
  default?: any;
  readOnly?: boolean;
  rule?: any;
}

export interface AModelStringSchema extends AModelElementSchema {
  type: Type.STRING;
  minLength?: number;
  maxLength?: number;
  style?: StringStyle;
}

export interface AModelIntegerSchema extends AModelElementSchema {
  type: Type.INTEGER;
  minimum?: number;
  maximum?: number;
  style?: IntegerStyle;
}

export interface AModelBooleanSchema extends AModelElementSchema {
  type: Type.BOOLEAN;
  style?: BooleanStyle;
}

export interface AModelEnumSchema extends AModelElementSchema {
  type: Type.STRING | Type.INTEGER | Type.BOOLEAN;
  enum?: [{ const: string | number | boolean; title: string }] | string[] | number[] | boolean[];
  style?: EnumStyle;
}

export interface AModelArraySchema extends AModelElementSchema {
  type: Type.ARRAY;
  items: AModelElementSchema;
}

export interface AModelObjectSchema extends AModelElementSchema {
  type: Type.OBJECT;
  properties: AModelElementSchema[];
}

export interface AModelRootSchema extends AModelObjectSchema {}
