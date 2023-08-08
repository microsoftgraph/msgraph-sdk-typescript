import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {deserializeIntoOrganizationalBrandingProperties} from './deserializeIntoOrganizationalBrandingProperties';
import type {OrganizationalBranding} from './organizationalBranding';
import type {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {serializeOrganizationalBrandingLocalization} from './serializeOrganizationalBrandingLocalization';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBranding(organizationalBranding: OrganizationalBranding | undefined = {} as OrganizationalBranding) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOrganizationalBrandingProperties(organizationalBranding),
        "localizations": n => { organizationalBranding.localizations = n.getCollectionOfObjectValues<OrganizationalBrandingLocalization>(createOrganizationalBrandingLocalizationFromDiscriminatorValue); },
    }
}
