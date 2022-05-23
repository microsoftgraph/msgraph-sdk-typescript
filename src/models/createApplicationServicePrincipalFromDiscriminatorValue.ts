import {ApplicationServicePrincipalImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationServicePrincipalImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationServicePrincipalImpl();
}
