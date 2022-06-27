import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosLobAppAssignmentSettings extends Partial<AdditionalDataHolder>, MobileAppAssignmentSettings, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The VPN Configuration Id to apply for this app. */
    vpnConfigurationId?: string | undefined;
}
