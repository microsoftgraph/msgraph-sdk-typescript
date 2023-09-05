import { deserializeIntoIdentityUserFlowAttributeCollectionResponse } from './deserializeIntoIdentityUserFlowAttributeCollectionResponse';
import { type IdentityUserFlowAttributeCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityUserFlowAttributeCollectionResponse;
}
