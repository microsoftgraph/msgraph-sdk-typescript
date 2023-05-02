import {ConditionalAccessExternalTenantsMembershipKind} from './conditionalAccessExternalTenantsMembershipKind';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessExternalTenants extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The membershipKind property */
    membershipKind?: ConditionalAccessExternalTenantsMembershipKind | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
