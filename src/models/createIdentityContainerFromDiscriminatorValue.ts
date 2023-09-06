import { deserializeIntoIdentityContainer } from './deserializeIntoIdentityContainer';
import { type IdentityContainer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityContainer;
}
