import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsMicrosoftEdgeApp extends MobileApp, Parsable {
    /**
     * The enum to specify the channels for Microsoft Edge apps.
     */
    channel?: MicrosoftEdgeChannel | undefined;
    /**
     * The language locale to use when the Edge app displays text to the user.
     */
    displayLanguageLocale?: string | undefined;
}
