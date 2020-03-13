import React from "react";
import UnixToUTCHour from "../Functions/UnixToUTCHour";

describe('Testing all functions', () => {
  test('Testing the function UnixToUTCHour', () =>{
    expect(UnixToUTCHour(1584074812)).toBe('1:46');
  });

  test('Testing the function UnixToUTCHour with a undefined value', () =>{
    expect(UnixToUTCHour(undefined)).toBe('Invalid value');
  });

  test('Testing the function UnixToUTCHour with a empty value', () =>{
    expect(UnixToUTCHour('')).toBe('Invalid value');
  });
})
