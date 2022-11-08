import {IdentitySecurityDefaultsEnforcementPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySecurityDefaultsEnforcementPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySecurityDefaultsEnforcementPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySecurityDefaultsEnforcementPolicyCollectionResponse();
}
