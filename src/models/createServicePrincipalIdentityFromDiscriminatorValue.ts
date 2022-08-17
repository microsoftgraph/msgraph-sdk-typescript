import {ServicePrincipalIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePrincipalIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePrincipalIdentity();
}
