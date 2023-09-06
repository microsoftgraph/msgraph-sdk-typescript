import { deserializeIntoSubscribedSkuCollectionResponse } from './deserializeIntoSubscribedSkuCollectionResponse';
import { type SubscribedSkuCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubscribedSkuCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribedSkuCollectionResponse;
}
