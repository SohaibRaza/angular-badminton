import { IonicNativePlugin } from '@ionic-native/core';
export declare class OpenInBrowserOriginal extends IonicNativePlugin {
    /**
     * Your plugin plugin functions go here.
     * Function names should match the ones in your .swift & .js files.
     * Otherwise you won't be able to execute them.
     */
    openUrl(url: string): Promise<any>;
}

export declare const OpenInBrowser: OpenInBrowserOriginal;