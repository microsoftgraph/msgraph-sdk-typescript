import { deserializeIntoSingleServicePrincipal } from './deserializeIntoSingleServicePrincipal';
import { type SingleServicePrincipal } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSingleServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSingleServicePrincipal;
}
