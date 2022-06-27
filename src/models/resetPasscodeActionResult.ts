import {DeviceActionResult} from './deviceActionResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResetPasscodeActionResult extends Partial<AdditionalDataHolder>, DeviceActionResult, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Newly generated passcode for the device */
    passcode?: string | undefined;
}
