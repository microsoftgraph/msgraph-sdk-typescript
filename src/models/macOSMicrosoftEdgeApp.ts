import { MicrosoftEdgeChannel } from './microsoftEdgeChannel';
import { type MobileApp } from './mobileApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MacOSMicrosoftEdgeApp extends MobileApp, Parsable {
    /**
     * The enum to specify the channels for Microsoft Edge apps.
     */
    channel?: MicrosoftEdgeChannel | undefined;
}
