import { deserializeIntoConditionalAccessPolicyCollectionResponse } from './deserializeIntoConditionalAccessPolicyCollectionResponse';
import { type ConditionalAccessPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPolicyCollectionResponse;
}
