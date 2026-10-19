/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
export * from 'rebrowser-puppeteer-core';
import { PuppeteerNode } from 'rebrowser-puppeteer-core';
/**
 * @public
 */
declare const puppeteer: PuppeteerNode;
export declare const 
/**
 * @public
 */
connect: (options: import("rebrowser-puppeteer-core").ConnectOptions) => Promise<import("rebrowser-puppeteer-core").Browser>, 
/**
 * @public
 */
defaultArgs: (options?: import("rebrowser-puppeteer-core").LaunchOptions) => Promise<string[]>, 
/**
 * @public
 */
executablePath: {
    (channel: import("rebrowser-puppeteer-core").ChromeReleaseChannel): Promise<string>;
    (options: import("rebrowser-puppeteer-core").LaunchOptions): Promise<string>;
    (): Promise<string>;
}, 
/**
 * @public
 */
launch: (options?: import("rebrowser-puppeteer-core").LaunchOptions) => Promise<import("rebrowser-puppeteer-core").Browser>, 
/**
 * @public
 */
trimCache: () => Promise<void>, 
/**
 * @public
 */
setFollowSymlinks: (followSymlinks: boolean) => void;
export default puppeteer;
//# sourceMappingURL=puppeteer.d.ts.map