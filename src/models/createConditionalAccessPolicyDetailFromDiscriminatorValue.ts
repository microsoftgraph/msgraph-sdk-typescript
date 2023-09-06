import { deserializeIntoConditionalAccessPolicyDetail } from './deserializeIntoConditionalAccessPolicyDetail';
import { type ConditionalAccessPolicyDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPolicyDetail;
}
