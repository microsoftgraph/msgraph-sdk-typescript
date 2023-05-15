import {deserializeIntoAppliedConditionalAccessPolicy} from './deserializeIntoAppliedConditionalAccessPolicy';
import {AppliedConditionalAccessPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppliedConditionalAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppliedConditionalAccessPolicy;
}
