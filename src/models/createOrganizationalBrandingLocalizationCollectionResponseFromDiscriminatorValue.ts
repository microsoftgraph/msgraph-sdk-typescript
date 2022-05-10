import {OrganizationalBrandingLocalizationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingLocalizationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationalBrandingLocalizationCollectionResponseImpl();
}
