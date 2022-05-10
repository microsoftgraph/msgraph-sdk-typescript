import {AppliedConditionalAccessPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppliedConditionalAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppliedConditionalAccessPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppliedConditionalAccessPolicyImpl();
}
