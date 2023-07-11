import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSMicrosoftEdgeApp extends MobileApp, Parsable {
    /**
     * The enum to specify the channels for Microsoft Edge apps.
     */
    channel?: MicrosoftEdgeChannel | undefined;
}
