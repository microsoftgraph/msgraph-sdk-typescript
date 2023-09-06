import { createOrganizationalBrandingLocalizationFromDiscriminatorValue } from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type OrganizationalBrandingLocalization } from './organizationalBrandingLocalization';
import { type OrganizationalBrandingLocalizationCollectionResponse } from './organizationalBrandingLocalizationCollectionResponse';
import { serializeOrganizationalBrandingLocalization } from './serializeOrganizationalBrandingLocalization';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingLocalizationCollectionResponse(organizationalBrandingLocalizationCollectionResponse: OrganizationalBrandingLocalizationCollectionResponse | undefined = {} as OrganizationalBrandingLocalizationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(organizationalBrandingLocalizationCollectionResponse),
        "value": n => { organizationalBrandingLocalizationCollectionResponse.value = n.getCollectionOfObjectValues<OrganizationalBrandingLocalization>(createOrganizationalBrandingLocalizationFromDiscriminatorValue); },
    }
}
