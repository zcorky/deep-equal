import {
  Primitive,
  primitive as isPrimitive,
  object as isObject,
  func as isFunc,
  array as isArray,
} from '@zcorky/is';

export type Source = Primitive | Array<any> | object | Function;

const keys = Object.keys;

/**
 * deep equal two object
 * 
 * @param objA Primitive | Array | Object | Function
 * @param objB Primitive | Array | Object | Function
 */
export const deepEqual = (objA: Source, objB: Source) => {
  if (isPrimitive(objA) || isFunc(objA)) return objA === objB;

  if (isArray(objA) && isArray(objB) && objA.length === objB.length) {
    return objA.every((_, index) => deepEqual(objA[index], objB[index]));
  }

  let _keys: string[];
  if (isObject(objA) && isObject(objB) && (_keys = keys(objA)).length === keys(objB).length) {
    return _keys.every(key => deepEqual(objA[key], objB[key]));
  }

  return false;
}

export default deepEqual;