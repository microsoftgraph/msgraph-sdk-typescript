import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBranding extends Partial<AdditionalDataHolder>, OrganizationalBrandingProperties, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Add different branding based on a locale. */
    localizations?: OrganizationalBrandingLocalization[] | undefined;
}
