import {AppliedConditionalAccessPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppliedConditionalAccessPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppliedConditionalAccessPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppliedConditionalAccessPolicyCollectionResponse();
}
