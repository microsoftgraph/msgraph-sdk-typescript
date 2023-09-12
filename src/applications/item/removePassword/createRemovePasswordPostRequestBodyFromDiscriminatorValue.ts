import { deserializeIntoRemovePasswordPostRequestBody } from './deserializeIntoRemovePasswordPostRequestBody';
import { type RemovePasswordPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemovePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemovePasswordPostRequestBody;
}
