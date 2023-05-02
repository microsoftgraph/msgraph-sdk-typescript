import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessGuestOrExternalUserTypes} from './conditionalAccessGuestOrExternalUserTypes';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessGuestsOrExternalUsers extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The externalTenants property */
    externalTenants?: ConditionalAccessExternalTenants | undefined;
    /** The guestOrExternalUserTypes property */
    guestOrExternalUserTypes?: ConditionalAccessGuestOrExternalUserTypes | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
