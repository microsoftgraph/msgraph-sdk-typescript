import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosiPadOSWebClip extends MobileApp, Parsable {
    /**
     * Indicates iOS/iPadOS web clip app URL. Example: 'https://www.contoso.com'
     */
    appUrl?: string | undefined;
    /**
     * Whether or not to use managed browser. When TRUE, the app will be required to be opened in Microsoft Edge. When FALSE, the app will not be required to be opened in Microsoft Edge. By default, this property is set to FALSE.
     */
    useManagedBrowser?: boolean | undefined;
}
