/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {Browser} from 'rebrowser-puppeteer-core';
import type {ChromeReleaseChannel} from 'rebrowser-puppeteer-core';
import type {ConnectOptions} from 'rebrowser-puppeteer-core';
import type {LaunchOptions} from 'rebrowser-puppeteer-core';
import type {PuppeteerNode} from 'rebrowser-puppeteer-core';

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  connect: (options: ConnectOptions) => Promise<Browser>;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  defaultArgs: (options?: LaunchOptions) => Promise<string[]>;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  executablePath: {
    (channel: ChromeReleaseChannel): Promise<string>;
    (options: LaunchOptions): Promise<string>;
    (): Promise<string>;
  };

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  launch: (options?: LaunchOptions) => Promise<Browser>;

/**
 * @public
 */
declare const puppeteer: PuppeteerNode;
export default puppeteer;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  setFollowSymlinks: (followSymlinks: boolean) => void;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  trimCache: () => Promise<void>;

export * from 'rebrowser-puppeteer-core';

export {};
