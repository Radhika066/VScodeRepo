import { test } from '@playwright/test';

test.describe('verify amazon login', () => {

    test.describe.configure({ mode: 'parallel' });

    test('login with valid username and valid password', async ({ page }) => {
        console.log('Valid Login');
    });

    test('login with valid username and invalid password', async ({ page }) => {
        console.log('Invalid login');
    });

});

test.describe('Amazon add to cart', () => {

    test.describe.configure({ mode: 'serial' });

    test('Valid Cart', async ({ page }) => {
        console.log('Able to add');
    });

    test('invalid cart', async ({ page }) => {
        console.log('Unable to add');
    });

});
