import {DeviceConfiguration} from './deviceConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCustomConfiguration extends Partial<AdditionalDataHolder>, DeviceConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Payload. (UTF8 encoded byte array) */
    payload?: string | undefined;
    /** Payload file name (.mobileconfig */
    payloadFileName?: string | undefined;
    /** Name that is displayed to the user. */
    payloadName?: string | undefined;
}
