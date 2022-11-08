import {ConditionalAccessPolicyDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessPolicyDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessPolicyDetail();
}
