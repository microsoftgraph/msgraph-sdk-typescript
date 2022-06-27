import {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDeviceAzureADAccount extends Partial<AdditionalDataHolder>, Partial<Parsable>, WindowsDeviceAccount {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Not yet documented */
    userPrincipalName?: string | undefined;
}
