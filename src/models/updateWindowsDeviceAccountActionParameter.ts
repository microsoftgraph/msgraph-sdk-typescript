import type {WindowsDeviceAccount} from './windowsDeviceAccount';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateWindowsDeviceAccountActionParameter extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Not yet documented
     */
    calendarSyncEnabled?: boolean | undefined;
    /**
     * Not yet documented
     */
    deviceAccount?: WindowsDeviceAccount | undefined;
    /**
     * Not yet documented
     */
    deviceAccountEmail?: string | undefined;
    /**
     * Not yet documented
     */
    exchangeServer?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Not yet documented
     */
    passwordRotationEnabled?: boolean | undefined;
    /**
     * Not yet documented
     */
    sessionInitiationProtocalAddress?: string | undefined;
}
