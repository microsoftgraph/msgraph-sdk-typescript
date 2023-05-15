import {deserializeIntoConditionalAccessPolicyDetail} from './deserializeIntoConditionalAccessPolicyDetail';
import {ConditionalAccessPolicyDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPolicyDetail;
}
