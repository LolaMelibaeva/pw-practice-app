import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
//import dotenv from 'dotenv';

 //dotenv.config({ path: path.resolve(URL, '.env') });
require('dotenv').config()


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<TestOptions>({
  testDir: './tests',
 timeout: 120000,
 //globalTimeout: 60000,
 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:'html',
  //  [['json', {outputFile: 'test-results/jsonReport.json'}],
  //  ['junit', {outputFile: 'test-results/junitReport.xml'}],
 //['allure-playwright']] 
 //['html'],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:4200/',
     globalQAUrl: 'https://www.globalsqa.com/demo-site/draganddrop/',
     baseURL: process.env.DEV === '1' ? 'http://localhost:4200/'
            : process.env.RC == '1' ? 'http://localhost:4200/'
            : 'http://localhost:4200/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
   actionTimeout: 20000,
    navigationTimeout: 25000,
    video: {
      mode: 'off',
      size: {width: 1920, height: 1080}
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'dev',
      use: { ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
       },
      
    },
    {
      name: 'rc',
      use: { ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
       },
    },
    {
      name: 'chromium',
      
    },

    {
      name: 'firefox',
      use: {
    browserName: 'firefox' ,
    }
  },
  {
    name: 'mobile',
    testMatch: 'testMobile.spec.ts',
    use: {
    //  ...devices['iPhone 13 Pro'],
      viewport: {width: 414, height: 800}
    }
  },

    
  ],
webServer: {

  command: 'npm run start',
  url: 'http://localhost:4200/'
}
  
});
