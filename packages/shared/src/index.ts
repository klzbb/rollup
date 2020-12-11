let _globalThis: any;
export const getGlobalThis = (): any => {
  // eslint-disable-next-line no-return-assign
  return (
    _globalThis ||
    (_globalThis =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : {})
  );
};
