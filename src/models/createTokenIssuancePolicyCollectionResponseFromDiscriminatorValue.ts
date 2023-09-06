import { deserializeIntoTokenIssuancePolicyCollectionResponse } from './deserializeIntoTokenIssuancePolicyCollectionResponse';
import { type TokenIssuancePolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenIssuancePolicyCollectionResponse;
}
