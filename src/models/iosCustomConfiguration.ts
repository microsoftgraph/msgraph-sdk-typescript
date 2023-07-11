import {DeviceConfiguration} from './deviceConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosCustomConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Payload. (UTF8 encoded byte array)
     */
    payload?: string | undefined;
    /**
     * Payload file name (.mobileconfig
     */
    payloadFileName?: string | undefined;
    /**
     * Name that is displayed to the user.
     */
    payloadName?: string | undefined;
}
