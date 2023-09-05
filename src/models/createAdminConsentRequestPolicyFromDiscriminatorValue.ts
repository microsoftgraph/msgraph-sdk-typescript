import { deserializeIntoAdminConsentRequestPolicy } from './deserializeIntoAdminConsentRequestPolicy';
import { type AdminConsentRequestPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAdminConsentRequestPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdminConsentRequestPolicy;
}
