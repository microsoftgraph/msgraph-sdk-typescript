import {deserializeIntoAdminConsentRequestPolicy} from './deserializeIntoAdminConsentRequestPolicy';
import {AdminConsentRequestPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminConsentRequestPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdminConsentRequestPolicy;
}
