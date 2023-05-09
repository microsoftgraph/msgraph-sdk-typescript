import {deserializeIntoServicePrincipalIdentity} from './deserializeIntoServicePrincipalIdentity';
import {ServicePrincipalIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalIdentity;
}
