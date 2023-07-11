import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessGuestOrExternalUserTypes} from './conditionalAccessGuestOrExternalUserTypes';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessGuestsOrExternalUsers extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The tenant IDs of the selected types of external users. Either all B2B tenant or a collection of tenant IDs. External tenants can be specified only when the property guestOrExternalUserTypes is not null or an empty String.
     */
    externalTenants?: ConditionalAccessExternalTenants | undefined;
    /**
     * The guestOrExternalUserTypes property
     */
    guestOrExternalUserTypes?: ConditionalAccessGuestOrExternalUserTypes | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
