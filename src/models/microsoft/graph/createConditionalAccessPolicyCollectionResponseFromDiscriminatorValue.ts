import {ConditionalAccessPolicyCollectionResponse} from './conditionalAccessPolicyCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessPolicyCollectionResponse();
}
