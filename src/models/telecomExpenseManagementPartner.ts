import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartner extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Whether the partner's AAD app has been authorized to access Intune. */
    appAuthorized?: boolean | undefined;
    /** Display name of the TEM partner. */
    displayName?: string | undefined;
    /** Whether Intune's connection to the TEM service is currently enabled or disabled. */
    enabled?: boolean | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    lastConnectionDateTime?: Date | undefined;
    /** URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service. */
    url?: string | undefined;
}
