import {AdminConsentRequestPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminConsentRequestPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdminConsentRequestPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdminConsentRequestPolicyImpl();
}
