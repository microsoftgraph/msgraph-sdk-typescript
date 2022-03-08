import {ApplicationServicePrincipal} from './applicationServicePrincipal';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationServicePrincipal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationServicePrincipal();
}
