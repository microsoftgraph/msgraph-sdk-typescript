import {ConditionalAccessPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessPolicyImpl();
}
