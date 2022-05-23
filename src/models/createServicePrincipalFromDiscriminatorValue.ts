import {ServicePrincipalImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePrincipalImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePrincipalImpl();
}
