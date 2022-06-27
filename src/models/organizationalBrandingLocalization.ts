import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingLocalization extends Partial<AdditionalDataHolder>, OrganizationalBrandingProperties, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
