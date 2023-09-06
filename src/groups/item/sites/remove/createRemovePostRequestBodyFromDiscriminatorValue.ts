import { deserializeIntoRemovePostRequestBody } from './deserializeIntoRemovePostRequestBody';
import { type RemovePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemovePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemovePostRequestBody;
}
