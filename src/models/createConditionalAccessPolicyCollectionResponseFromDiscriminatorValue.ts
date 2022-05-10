import {ConditionalAccessPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessPolicyCollectionResponseImpl();
}
