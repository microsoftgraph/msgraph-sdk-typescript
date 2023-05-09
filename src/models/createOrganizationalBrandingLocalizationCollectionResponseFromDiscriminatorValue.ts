import {deserializeIntoOrganizationalBrandingLocalizationCollectionResponse} from './deserializeIntoOrganizationalBrandingLocalizationCollectionResponse';
import {OrganizationalBrandingLocalizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizationalBrandingLocalizationCollectionResponse;
}
