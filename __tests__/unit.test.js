// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(111)111-1111 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(111)111-1111')).toBe(true);
});

test('(222)222-2222 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(222)222-2222')).toBe(true);
});

test('111111111 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('111111111')).toBe(false);
});

test('(111)111-111 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(111)111-111')).toBe(false);
});

test('unicorns@gmail.com is a valid email', () => {
    expect(functions.isEmail('unicorns@gmail.com')).toBe(true);
});

test('unicorns@hotmail.com is a valid email', () => {
    expect(functions.isEmail('unicorns@hotmail.com')).toBe(true);
});

test('unicorns is a valid email', () => {
    expect(functions.isEmail('unicorns')).toBe(false);
});

test('unicorns@gmail is a valid email', () => {
    expect(functions.isEmail('unicorns@gmail ')).toBe(false);
});

test('aBrW2 is a valid strong password', () => {
    expect(functions.isStrongPassword('aBrW2')).toBe(true);
});

test('ahduhdafuisdhf is a valid strong password', () => {
    expect(functions.isStrongPassword('ahduhdafuisdhf')).toBe(true);
});

test('adhosfosfjdskvniosdfiodsVNoisdfjods is not a valid strong password', () => {
    expect(functions.isStrongPassword('adhosfosfjdskvniosdfiodsVNoisdfjods')).toBe(false);
});

test('dj is not a valid strong password', () => {
    expect(functions.isStrongPassword('dj')).toBe(false);
});

test('06 / 05 / 2022 is a valid date', () => {
    expect(functions.isDate('06/05/2022')).toBe(true);
});

test('05 / 01 / 2002 is a valid date', () => {
    expect(functions.isDate('05/01/2002')).toBe(true);
});

test('06 - 05 - 2022 is not a valid date', () => {
    expect(functions.isDate('06-5-2022')).toBe(false);
});

test('05 / 01 is not a valid date', () => {
    expect(functions.isDate('05/01')).toBe(false);
});

test('903825 is a valid hex color code', () => {
    expect(functions.isHexColor('903825')).toBe(true);
});

test('903825 is a valid hex color code', () => {
    expect(functions.isHexColor('4A1D14')).toBe(true);
});

test('5 is not a valid hex color code', () => {
    expect(functions.isHexColor('5')).toBe(false);
});

test('903825 is not a valid hex color code', () => {
    expect(functions.isHexColor('9038255')).toBe(false);
});
