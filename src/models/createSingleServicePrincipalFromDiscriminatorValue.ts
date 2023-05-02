import {deserializeIntoSingleServicePrincipal} from './deserializeIntoSingleServicePrincipal';
import {SingleServicePrincipal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSingleServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSingleServicePrincipal;
}
