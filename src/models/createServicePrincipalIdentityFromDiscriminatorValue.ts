import {ServicePrincipalIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePrincipalIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePrincipalIdentityImpl();
}
