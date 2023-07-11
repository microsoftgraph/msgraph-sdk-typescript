import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartner extends Entity, Parsable {
    /**
     * Whether the partner's AAD app has been authorized to access Intune.
     */
    appAuthorized?: boolean | undefined;
    /**
     * Display name of the TEM partner.
     */
    displayName?: string | undefined;
    /**
     * Whether Intune's connection to the TEM service is currently enabled or disabled.
     */
    enabled?: boolean | undefined;
    /**
     * Timestamp of the last request sent to Intune by the TEM partner.
     */
    lastConnectionDateTime?: Date | undefined;
    /**
     * URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
     */
    url?: string | undefined;
}
