import { deserializeIntoSmallPostRequestBody } from './deserializeIntoSmallPostRequestBody';
import { type SmallPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSmallPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSmallPostRequestBody;
}
