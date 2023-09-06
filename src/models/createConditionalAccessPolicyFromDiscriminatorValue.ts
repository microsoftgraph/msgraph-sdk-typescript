import { deserializeIntoConditionalAccessPolicy } from './deserializeIntoConditionalAccessPolicy';
import { type ConditionalAccessPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPolicy;
}
