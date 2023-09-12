import { deserializeIntoB2xIdentityUserFlowCollectionResponse } from './deserializeIntoB2xIdentityUserFlowCollectionResponse';
import { type B2xIdentityUserFlowCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoB2xIdentityUserFlowCollectionResponse;
}
