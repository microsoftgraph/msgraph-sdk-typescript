import {deserializeIntoOrganizationalBrandingLocalization} from './deserializeIntoOrganizationalBrandingLocalization';
import {OrganizationalBrandingLocalization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizationalBrandingLocalization;
}
