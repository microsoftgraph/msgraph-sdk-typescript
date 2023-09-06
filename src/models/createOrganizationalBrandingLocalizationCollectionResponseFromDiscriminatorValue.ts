import { deserializeIntoOrganizationalBrandingLocalizationCollectionResponse } from './deserializeIntoOrganizationalBrandingLocalizationCollectionResponse';
import { type OrganizationalBrandingLocalizationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizationalBrandingLocalizationCollectionResponse;
}
