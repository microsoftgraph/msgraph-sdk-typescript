import {deserializeIntoConditionalAccessPolicyCollectionResponse} from './deserializeIntoConditionalAccessPolicyCollectionResponse';
import {ConditionalAccessPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPolicyCollectionResponse;
}
