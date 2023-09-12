import { deserializeIntoRemoveGroupPostRequestBody } from './deserializeIntoRemoveGroupPostRequestBody';
import { type RemoveGroupPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoveGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveGroupPostRequestBody;
}
