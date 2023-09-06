import { deserializeIntoWipePostRequestBody } from './deserializeIntoWipePostRequestBody';
import { type WipePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWipePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWipePostRequestBody;
}
