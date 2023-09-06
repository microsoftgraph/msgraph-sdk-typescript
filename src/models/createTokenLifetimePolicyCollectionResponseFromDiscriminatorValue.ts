import { deserializeIntoTokenLifetimePolicyCollectionResponse } from './deserializeIntoTokenLifetimePolicyCollectionResponse';
import { type TokenLifetimePolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenLifetimePolicyCollectionResponse;
}
