import { deserializeIntoRemoveKeyPostRequestBody } from './deserializeIntoRemoveKeyPostRequestBody';
import { type RemoveKeyPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoveKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveKeyPostRequestBody;
}
