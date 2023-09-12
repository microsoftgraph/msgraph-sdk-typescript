import { deserializeIntoForceDeletePostRequestBody } from './deserializeIntoForceDeletePostRequestBody';
import { type ForceDeletePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createForceDeletePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoForceDeletePostRequestBody;
}
