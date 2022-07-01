import {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateWindowsDeviceAccountActionParameter extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Not yet documented */
    calendarSyncEnabled?: boolean | undefined;
    /** Not yet documented */
    deviceAccount?: WindowsDeviceAccount | undefined;
    /** Not yet documented */
    deviceAccountEmail?: string | undefined;
    /** Not yet documented */
    exchangeServer?: string | undefined;
    /** Not yet documented */
    passwordRotationEnabled?: boolean | undefined;
    /** Not yet documented */
    sessionInitiationProtocalAddress?: string | undefined;
}
